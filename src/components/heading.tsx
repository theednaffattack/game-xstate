import { css } from "@linaria/core";
import React from "react";

const headingStyle = css`
  font-size: 2em;
  color: var(--white);
  font-family: "VCR_OSD_MONO", monospace, "Courier New";
  text-transform: uppercase;
`;

export function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className={headingStyle}>{children}</h1>;
}
