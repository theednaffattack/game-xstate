import { css } from "@linaria/core";

export const menuScreenStyles = css`
  background-color: var(--black);

  outline: var(--dev-outline, 2px limegreen dashed);

  display: grid;
  height: 100%;

  justify-content: center;
  align-content: center;
`;

export const largeImg = css`
  width: var(--large-img);
  object-fit: contain;
`;

export const mediumImg = css`
  width: var(--medium-img);
  object-fit: contain;
`;

export const smallImg = css`
  width: var(--small-img);
  object-fit: contain;
`;
