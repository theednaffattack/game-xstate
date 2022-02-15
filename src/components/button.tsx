import { css } from "@linaria/core";
import React from "react";

const style = css`
  text-transform: uppercase;
  background-color: var(--black);

  font-family: "VCR_OSD_MONO", "monospace";
  color: var(--white);
  padding: 1em;
  outline: 2px var(--white) solid;
`;

export function Button({
  autofocus,
  children,
  onClick,
}: {
  autofocus?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button autoFocus={autofocus} className={style} onClick={onClick}>
      {children}
    </button>
  );
}
