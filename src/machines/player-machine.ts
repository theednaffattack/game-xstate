import { createMachine } from "xstate";
import { PlayerStateType } from "../types";

export const playerMachine = createMachine<null, any, PlayerStateType>({
  id: "player",
  initial: "live",
  states: {
    live: {},
    dead: {},
  },
});
