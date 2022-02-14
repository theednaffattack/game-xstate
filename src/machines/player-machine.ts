import { createMachine } from "xstate";
import { log } from "xstate/lib/actions";
import { PLAYER_STARTING_COORDS } from "../lib/constants";
import { CoordsType } from "../types";
import { PlayerEventType, PlayerStateType } from "./player-machine-types";

export interface PlayerContext {
  coords: CoordsType;
}

export const playerMachine = createMachine<
  PlayerContext,
  PlayerEventType,
  PlayerStateType
>({
  context: {
    coords: PLAYER_STARTING_COORDS as CoordsType,
  },
  id: "player",
  initial: "alive",
  states: {
    alive: { on: { ARROW_BUTTON_CLICKED: { actions: log() } } },
    dead: {},
  },
});
