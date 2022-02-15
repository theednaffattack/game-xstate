import { createMachine } from "xstate";
import { assign } from "xstate/lib/actions";
import { CoordsType } from "../types";
import {
  MonsterContextType,
  MonsterEventType,
  MonsterStateType,
} from "./monster-machine-types";

const coordsList: CoordsType[] = [
  [8, 1],
  [8, 2],
];

export const monsterMachine = createMachine<
  MonsterContextType,
  MonsterEventType,
  MonsterStateType
>(
  {
    id: "monster",
    initial: "up",
    context: {
      coords: coordsList[0],
    },
    states: {
      up: { after: { 2000: { target: "down", actions: "moveDown" } } },
      down: { after: { 2000: { target: "up", actions: "moveUp" } } },
    },
  },
  {
    actions: {
      moveUp: assign(() => {
        return { coords: coordsList[0] };
      }),
      moveDown: assign(() => {
        return { coords: coordsList[1] };
      }),
    },
  }
);
