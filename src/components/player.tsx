import { useActor } from "@xstate/react";
import React from "react";
import thief from "../game-assets/images/thief.gif";
import { usePlayerControls } from "../hooks/use-player-controls";
import { coordsToPosition } from "../lib/util/coords-to-position";
import {
  DirectionType,
  PlayerActorType,
} from "../machines/player-machine-types";
import { Image, ImageSizeType } from "./image";

interface PlayerProps {
  actor: PlayerActorType;
}

function Player({ actor }: PlayerProps) {
  const [state, send] = useActor(actor);
  const { coords } = state.context;
  const position = coordsToPosition(coords);
  usePlayerControls({
    handleArrowUp: () =>
      send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.Up }),
    handleArrowDown: () =>
      send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.Down }),
    handleArrowLeft: () =>
      send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.Left }),
    handleArrowRight: () =>
      send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.Right }),
  });
  return (
    <div style={{ position: "absolute", left: position[0], top: position[1] }}>
      <Image src={thief} alt="Thief" size={ImageSizeType.Small} />
    </div>
  );
}

export default Player;
