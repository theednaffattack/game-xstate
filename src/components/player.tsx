import { useActor } from "@xstate/react";
import React from "react";
import thief from "../game-assets/images/thief.gif";
import { PlayerActor } from "../types";
import { Image, ImageSizeType } from "./image";

interface PlayerProps {
  actor: PlayerActor;
}

function Player({ actor }: PlayerProps) {
  const [state, send] = useActor(actor);
  return <Image src={thief} alt="Thief" size={ImageSizeType.Small} />;
}

export default Player;
