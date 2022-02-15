import { createMachine } from "xstate";
import { MonsterContextType, MonsterStateType } from "./monster-machine-types";

export const monsterMachine = createMachine<
  MonsterContextType,
  any,
  MonsterStateType
>({
  id: "monster",
  initial: "active",
  context: {
    coords: [8, 1],
  },
  states: {
    active: {},
  },
});
