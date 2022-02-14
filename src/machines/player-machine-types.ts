import { ActorRef } from "xstate";
import { PlayerContextType } from "./player-machine";

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

export type PlayerEventType = ArrowButtonClickedType;

export type PlayerActorType = ActorRef<any, PlayerStateType>;
