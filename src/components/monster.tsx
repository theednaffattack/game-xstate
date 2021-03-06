import { useActor } from "@xstate/react";
import React from "react";
import { coordsToPosition } from "../lib/util/coords-to-position";
import { MonsterActorType } from "../machines/monster-machine-types";
import monster from "../game-assets/images/monster.gif";
import { Image, ImageSizeType } from "./image";
import { Layout } from "./layout";

type MonsterProps = {
  actor: MonsterActorType;
};

export function Monster({ actor }: MonsterProps) {
  const [state, send] = useActor(actor);
  const { coords } = state.context;
  const position = coordsToPosition(coords);
  return (
    <Layout left={position[0]} top={position[1]}>
      <Image src={monster} alt="Monster" size={ImageSizeType.Small} />
    </Layout>
  );
}
