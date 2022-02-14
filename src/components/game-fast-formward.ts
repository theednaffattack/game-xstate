import { GameEventType } from "../machines/game-machine-types";

export const fastForwardToLevelOneEvents: GameEventType[] = [
  { type: "START_BUTTON_CLICKED" },
];

export const fastForwardToLevelTwoEvents: GameEventType[] = [
  ...fastForwardToLevelOneEvents,
  { type: "PLAYER_WALKED_THROUGH_DOOR" },
];

export const fastForwardToLevelThreeEvents: GameEventType[] = [
  ...fastForwardToLevelTwoEvents,
  { type: "PLAYER_WALKED_THROUGH_DOOR" },
];

export const fastForwardToGameOverEvents: GameEventType[] = [
  ...fastForwardToLevelTwoEvents,
  { type: "PLAYER_DIED" },
];

export const fastForwardToGameCompleteEvents: GameEventType[] = [
  ...fastForwardToLevelThreeEvents,
  { type: "PLAYER_GOT_TREASURE" },
];
