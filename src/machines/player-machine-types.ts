import { ActorRef } from "xstate";
import { PlayerContext } from "./player-machine";

// Player machine
export enum DirectionType {
  Left = "Left",
  Right = "Right",
  Up = "Up",
  Down = "Down",
}

export interface PlayerStateType {
  context: PlayerContext;
  value: "alive" | "dead";
}

export type ArrowButtonClickedType = {
  type: "ARROW_BUTTON_CLICKED";
  direction: DirectionType;
};

export type PlayerEventType = ArrowButtonClickedType;

export type PlayerActorType = ActorRef<any, PlayerStateType>;
