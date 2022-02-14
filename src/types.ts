import { ActorRef } from "xstate";
import { PlayerContext } from "./machines/player-machine";

type XCoordType = number;
type YCoordType = number;

export type CoordsType = [XCoordType, YCoordType];

export enum DirectionType {
  Left = "Left",
  Right = "Right",
  Up = "Up",
  Down = "Down",
}

export interface MenuScreenProps {
  children: React.ReactNode;
}

// Machine Types
export interface StartButtonClicked {
  type: "START_BUTTON_CLICKED";
}

export interface PlayerDied {
  type: "PLAYER_DIED";
}

export interface PlayerGotTreasure {
  type: "PLAYER_GOT_TREASURE";
}

export interface RestartButtonClicked {
  type: "RESTART_BUTTON_CLICKED";
}

export interface HomeButtonClicked {
  type: "HOME_BUTTON_CLICKED";
}

export interface PlayerWalkedThroughDoor {
  type: "PLAYER_WALKED_THROUGH_DOOR";
}

export type GameEventType =
  | StartButtonClicked
  | PlayerDied
  | PlayerGotTreasure
  | PlayerWalkedThroughDoor
  | RestartButtonClicked
  | HomeButtonClicked;

export type GameState = {
  context: null;
  value:
    | "home"
    | "playing"
    | "playing.level1"
    | "playing.level2"
    | "playing.level3"
    | "gameOver"
    | "gameComplete";
};

// Player machine
export interface PlayerStateType {
  context: PlayerContext;
  value: "alive" | "dead";
}

export type PlayerActor = ActorRef<any, PlayerStateType>;
