import { createMachine } from "xstate";
import { PLAYER_STARTING_COORDS } from "../lib/constants";
import { CoordsType, PlayerStateType } from "../types";

export interface PlayerContext {
  coords: CoordsType;
}

export const playerMachine = createMachine<PlayerContext, any, PlayerStateType>(
  {
    context: {
      coords: PLAYER_STARTING_COORDS as CoordsType,
    },
    id: "player",
    initial: "alive",
    states: {
      alive: {},
      dead: {},
    },
  }
);
