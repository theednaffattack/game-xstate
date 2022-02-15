import { css } from "@linaria/core";
import { useActor } from "@xstate/react";
import React, { CSSProperties } from "react";
import thief from "../game-assets/images/thief.gif";
import { usePlayerControls } from "../hooks/use-player-controls";
import { coordsToPosition } from "../lib/util/coords-to-position";
import {
  DirectionType,
  PlayerActorType,
} from "../machines/player-machine-types";
import { Health } from "./health";
import { Image, ImageSizeType } from "./image";

interface PlayerProps {
  actor: PlayerActorType;
}

const abPosition = css`
  position: absolute;
`;

const healthPosition = css`
  position: absolute;
  top: -125px;
  left: -40px;
`;

function HealthLayout({ children }: { children: React.ReactNode }) {
  return <div className={healthPosition}>{children}</div>;
}

function Layout({
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

function Player({ actor }: PlayerProps) {
  const [state, send] = useActor(actor);
  const { coords, health } = state.context;
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
    <>
      <HealthLayout>
        <Health health={health} />
      </HealthLayout>
      <Layout left={position[0]} top={position[1]}>
        <Image src={thief} alt="Thief" size={ImageSizeType.Small} />
      </Layout>
    </>
  );
}

export default Player;
