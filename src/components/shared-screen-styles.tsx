import { css } from "@linaria/core";
import { GRID_SQUARE_SIZE } from "../lib/constants";

export const menuScreenStyles = css`
  background-color: var(--black);

  /* outline: var(--dev-outline, 2px limegreen dashed); */

  display: grid;
  height: 100%;

  justify-content: center;
  align-content: center;
`;

export const largeImg = css`
  width: var(--large-img);
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
`;

export const mediumImg = css`
  width: var(--medium-img);
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
`;

export const smallImg = css`
  width: ${GRID_SQUARE_SIZE};
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
`;
