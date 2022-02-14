import { createMachine } from "xstate";
import { assign, choose, log } from "xstate/lib/actions";
import { PLAYER_STARTING_COORDS } from "../lib/constants";
import { getTargetCoords } from "../lib/util/get-target-coords";
import { isCoordsOnGrid } from "../lib/util/is-coords-on-grid";
import { CoordsType } from "../types";
import { PlayerEventType, PlayerStateType } from "./player-machine-types";

export interface PlayerContextType {
  coords: CoordsType;
}

export const playerMachine = createMachine<
  PlayerContextType,
  PlayerEventType,
  PlayerStateType
>(
  {
    context: {
      coords: PLAYER_STARTING_COORDS as CoordsType,
    },
    id: "player",
    initial: "alive",
    states: {
      alive: {
        on: { ARROW_BUTTON_CLICKED: { actions: "onArrowButtonClicked" } },
      },
      dead: {},
    },
  },
  {
    actions: {
      onArrowButtonClicked: choose([
        {
          cond: "isSquareAvailable",
          actions: "move",
        },
      ]),
      move: assign((context: PlayerContextType, event: PlayerEventType) => {
        const { coords } = context;
        const { direction } = event;
        const targetCoords = getTargetCoords({ coords, direction });
        return { coords: targetCoords };
      }),
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
    },
  }
);
