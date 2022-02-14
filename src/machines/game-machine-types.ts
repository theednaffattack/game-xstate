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
