import { createMachine } from "xstate";
import { assign, choose, sendParent } from "xstate/lib/actions";
import { arrayEquals } from "../lib/util/array-equals";
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
      playerCoords: undefined,
    },
    on: {
      PLAYER_MOVED: {
        actions: ["storePlayerCoords", "attemptAttack"],
      },
    },
    states: {
      up: {
        after: { 2000: { target: "down", actions: "moveDown" } },
        entry: "attemptAttack",
      },
      down: {
        after: { 2000: { target: "up", actions: "moveUp" } },
        entry: "attemptAttack",
      },
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
      storePlayerCoords: assign((_, event) => {
        return { playerCoords: event.coords };
      }),
      attemptAttack: choose([
        { cond: "isMonsterPlayerCoordsEqual", actions: "attack" },
      ]),
      attack: sendParent("ATTACK_PLAYER"),
    },
    guards: {
      isMonsterPlayerCoordsEqual: (context) => {
        if (context.playerCoords) {
          return arrayEquals(context.playerCoords, context.coords);
        }
        return false;
      },
    },
  }
);
