import { css } from "@linaria/core";
import React from "react";
import treasure from "../game-assets/images/treasure.png";
import { TREASURE_COORDS } from "../lib/constants";
import { coordsToPosition } from "../lib/util/coords-to-position";
import { CoordsType } from "../types";
import { Image, ImageSizeType } from "./image";

type TreasureProps = {};

const layoutStyles = css`
  position: absolute;
`;

export function Treasure({}: TreasureProps) {
  const position = coordsToPosition(TREASURE_COORDS as CoordsType);
  return (
    <div
      className={layoutStyles}
      style={{ top: position[1], left: position[0] }}
    >
      <Image src={treasure} alt="Treasure chest" size={ImageSizeType.Small} />
    </div>
  );
}
