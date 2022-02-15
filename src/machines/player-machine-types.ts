import { ActorRef } from "xstate";
import { CoordsType } from "../types";
import { AttackPlayerType } from "./monster-machine-types";

export interface PlayerContextType {
  coords: CoordsType;
  health: number;
}

// Player machine
export enum DirectionType {
  Left = "Left",
  Right = "Right",
  Up = "Up",
  Down = "Down",
}

export interface PlayerStateType {
  context: PlayerContextType;
  value: "alive" | "dead";
}

export type ArrowButtonClickedType = {
  type: "ARROW_BUTTON_CLICKED";
  direction: DirectionType;
};

export type PlayerEventType =
  | ArrowButtonClickedType
  | ResetPlayerCoordsType
  | AttackPlayerType;

export type PlayerActorType = ActorRef<any, PlayerStateType>;

export interface ResetPlayerCoordsType {
  type: "RESET_PLAYER_COORDS";
}
