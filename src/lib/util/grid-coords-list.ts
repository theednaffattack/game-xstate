import { flatten } from "xstate/lib/utils";
import { NUMBER_OF_GRID_COLUMNS, NUMBER_OF_GRID_ROWS } from "../constants";

export const gridCoordsList = flatten(
  Array(NUMBER_OF_GRID_ROWS)
    .fill(undefined)
    .map((_, colIndex) =>
      Array(NUMBER_OF_GRID_COLUMNS)
        .fill(undefined)
        .map((_, rowIndex) => [colIndex, rowIndex])
    )
);
