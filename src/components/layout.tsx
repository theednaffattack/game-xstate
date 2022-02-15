import React, { CSSProperties } from "react";
import { abPosition } from "./player";

export function Layout({
  children,
  top,
  left,
}: {
  children: React.ReactNode;
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
}) {
  return (
    <div className={abPosition} style={{ top, left }}>
      {children}
    </div>
  );
}
