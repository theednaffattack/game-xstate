import { createMachine } from "xstate";
import { assign, choose, log, sendParent } from "xstate/lib/actions";
import {
  PLAYER_STARTING_COORDS,
  PLAYER_STARTING_HEALTH,
} from "../lib/constants";
import { getTargetCoords } from "../lib/util/get-target-coords";
import { isCoordsOnGrid } from "../lib/util/is-coords-on-grid";
import { CoordsType } from "../types";
import { PlayerMovedType } from "./game-machine-types";
import {
  PlayerContextType,
  PlayerEventType,
  PlayerStateType,
} from "./player-machine-types";

export const playerMachine = createMachine<
  PlayerContextType,
  PlayerEventType,
  PlayerStateType
>(
  {
    context: {
      coords: PLAYER_STARTING_COORDS as CoordsType,
      health: PLAYER_STARTING_HEALTH,
    },
    id: "player",
    initial: "alive",
    states: {
      alive: {
        on: {
          ARROW_BUTTON_CLICKED: { actions: "onArrowButtonClicked" },
          RESET_PLAYER_COORDS: { actions: "resetCoords" },
          ATTACK_PLAYER: { actions: "reduceHealth", target: "determining" },
        },
      },
      dead: {
        entry: "broadcastPlayerDied",
      },
      determining: {
        always: [
          {
            cond: "isHealthZero",
            target: "dead",
          },
          { target: "alive" },
        ],
      },
    },
  },
  {
    actions: {
      onArrowButtonClicked: choose([
        {
          cond: "isSquareAvailable",
          actions: ["move", `broadcastPlayerMoved`],
        },
      ]),
      broadcastPlayerMoved: sendParent((context) => {
        const { coords } = context;
        const event: PlayerMovedType = {
          type: "PLAYER_MOVED",
          coords,
        };

        return event;
      }),
      move: assign((context: PlayerContextType, event: PlayerEventType) => {
        if (event.type === "ARROW_BUTTON_CLICKED") {
          const { coords } = context;
          const { direction } = event;
          const targetCoords = getTargetCoords({ coords, direction });
          return { coords: targetCoords };
        }
        // if the arrow button wasn't clicked, don't move
        const { coords } = context;
        return { coords };
      }),
      resetCoords: assign((coords, event) => {
        if (event.type === "RESET_PLAYER_COORDS") {
          return { coords: PLAYER_STARTING_COORDS as CoordsType };
        }
        return { coords: coords.coords };
      }),
      reduceHealth: assign((context, event) => ({
        health: context.health - 1,
      })),
      broadcastPlayerDied: sendParent("PLAYER_DIED"),
    },
    guards: {
      isSquareAvailable: (
        context: PlayerContextType,
        event: PlayerEventType
      ): boolean => {
        if (event.type === "ARROW_BUTTON_CLICKED") {
          const { coords } = context;
          const { direction } = event;
          const targetCoords = getTargetCoords({ coords, direction });

          return isCoordsOnGrid(targetCoords);
        }
        // ignore all other events
        return false;
      },
      isHealthZero: (context) => {
        return context.health === 0;
      },
    },
  }
);
