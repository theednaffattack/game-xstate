import { CoordsType } from "../../types";
import { GRID_SQUARE_SIZE } from "../constants";

export function coordsToPosition(coords: CoordsType) {
  return coords.map((coord) => `${coord * GRID_SQUARE_SIZE}px`);
}
