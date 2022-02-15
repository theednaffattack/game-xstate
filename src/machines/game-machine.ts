import { createMachine } from "xstate";
import { choose, log, send } from "xstate/lib/actions";
import { DOOR_COORDS } from "../lib/constants";
import { arrayEquals } from "../lib/util/array-equals";
import { GameEventType, GameState } from "./game-machine-types";
import { playerMachine } from "./player-machine";

export const gameMachine = createMachine<null, GameEventType, GameState>(
  {
    id: "game",
    initial: "home",
    states: {
      home: {
        on: {
          START_BUTTON_CLICKED: "playing",
        },
      },
      playing: {
        invoke: { id: "playerActor", src: playerMachine },
        on: {
          PLAYER_DIED: "gameOver",
          PLAYER_GOT_TREASURE: "gameComplete",
          PLAYER_MOVED: {
            actions: `playerMoved`,
          },
        },
        initial: "level1",
        states: {
          level1: {
            on: {
              PLAYER_WALKED_THROUGH_DOOR: "level2",
            },
          },
          level2: {
            entry: `resetPlayerCoords`,
            on: {
              PLAYER_WALKED_THROUGH_DOOR: "level3",
            },
          },
          level3: {
            on: {
              PLAYER_GOT_TREASURE: "",
            },
          },
        },
      },
      gameOver: {
        on: {
          RESTART_BUTTON_CLICKED: "playing",
        },
      },
      gameComplete: {
        on: {
          HOME_BUTTON_CLICKED: "home",
        },
      },
    },
  },
  {
    actions: {
      playerMoved: choose([
        {
          cond: `isPlayerAtDoor`,
          actions: `playerWalkedThroughDoor`,
        },
      ]),
      playerWalkedThroughDoor: send("PLAYER_WALKED_THROUGH_DOOR"),
      resetPlayerCoords: send("RESET_PLAYER_COORDS", { to: `playerActor` }),
    },
    guards: {
      isPlayerAtDoor: (context, event) => {
        if (event.type === "PLAYER_MOVED") {
          const { coords } = event;
          return arrayEquals(coords, DOOR_COORDS);
        }

        return false;
      },
    },
  }
);
