import { css } from "@linaria/core";
import React from "react";
import {
  GRID_SQUARE_SIZE,
  NUMBER_OF_GRID_COLUMNS,
  NUMBER_OF_GRID_ROWS,
} from "../lib/constants";
import { gridCoordsList } from "../lib/util/grid-coords-list";

const gridStyles = css`
  width: ${NUMBER_OF_GRID_COLUMNS * GRID_SQUARE_SIZE}px;
  height: ${NUMBER_OF_GRID_ROWS * GRID_SQUARE_SIZE}px;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: var(--white-border); */
`;

type GridProps = { children?: React.ReactNode };

function GridLayout({ children }: GridProps) {
  return <section className={gridStyles}>{children}</section>;
}

interface GridSquareProps {
  x: number;
  y: number;
}

const tabNumbers = css`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: var(--dev-outline); */

  font-variant-numeric: tabular-nums;
  color: white;
  & p {
    font-variant-numeric: tabular-nums;
    color: white;
    padding: 0;
    margin: 0;
    font-family: monospace;
  }
`;

export function GridSquare({ x, y }: GridSquareProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: `${GRID_SQUARE_SIZE}px`,
        height: `${GRID_SQUARE_SIZE}px`,
        top: `${x * GRID_SQUARE_SIZE}px`,
        left: `${y * GRID_SQUARE_SIZE}px`,
        // border: "1px solid white",
        // padding: 0,
      }}
    ></div>
  );
}

export function Grid({ children }: GridProps) {
  return (
    <GridLayout>
      {gridCoordsList.map(([x, y]) => (
        <GridSquare key={`${x}-${y}`} x={x} y={y}></GridSquare>
      ))}
      {children}
    </GridLayout>
  );
}
