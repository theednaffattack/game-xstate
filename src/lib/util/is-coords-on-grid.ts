import { CoordsType } from "../../types";
import { gridCoordsList } from "./grid-coords-list";

export function isCoordsOnGrid(coords: CoordsType): boolean {
  return gridCoordsList.some(
    (gridCoord) => gridCoord[1] == coords[0] && gridCoord[0] == coords[1]
  );
}
