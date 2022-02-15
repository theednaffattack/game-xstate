import { Actor, ActorRef } from "xstate";
import { CoordsType } from "../types";
import { PlayerMovedType } from "./game-machine-types";

export interface MonsterContextType {
  coords: CoordsType;
  playerCoords?: CoordsType;
}

export type MonsterStateType = {
  context: MonsterContextType;
  value: "up" | "down";
};

export type MonsterEventType = PlayerMovedType;

export type MonsterActorType = ActorRef<MonsterEventType, MonsterStateType>;
