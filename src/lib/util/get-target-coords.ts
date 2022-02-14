import { DirectionType } from "../../machines/player-machine-types";
import { CoordsType } from "../../types";

export function getTargetCoords({
  coords,
  direction,
}: {
  coords: CoordsType;
  direction: DirectionType;
}): CoordsType {
  switch (direction) {
    case DirectionType.Up:
      return [coords[0], coords[1] - 1];
    case DirectionType.Down:
      return [coords[0], coords[1] + 1];
    case DirectionType.Left:
      return [coords[0] - 1, coords[1]];
    case DirectionType.Right:
      return [coords[0] + 1, coords[1]];
    default:
      throw new Error(`Unknown direction ${direction}`);
  }
}
