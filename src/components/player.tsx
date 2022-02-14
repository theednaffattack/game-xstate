import { useActor } from "@xstate/react";
import React from "react";
import thief from "../game-assets/images/thief.gif";
import { coordsToPosition } from "../lib/util/coords-to-position";
import { PlayerActor } from "../types";
import { Image, ImageSizeType } from "./image";

interface PlayerProps {
  actor: PlayerActor;
}

function Player({ actor }: PlayerProps) {
  const [state, send] = useActor(actor);
  const { coords } = state.context;
  const position = coordsToPosition(coords);
  return (
    <div style={{ position: "absolute", left: position[0], top: position[1] }}>
      <Image src={thief} alt="Thief" size={ImageSizeType.Small} />
    </div>
  );
}

export default Player;
