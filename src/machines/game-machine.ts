import { createMachine } from "xstate";
import { GameEventType, GameState } from "../types";

export const gameMachine = createMachine<null, GameEventType, GameState>({
  id: "game",
  states: {
    home: {
      on: {
        START_BUTTON_CLICKED: "playing",
      },
    },
    playing: {
      on: {
        PLAYER_DIED: "gameOver",
        PLAYER_GOT_TREASURE: "gameComplete",
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
});
