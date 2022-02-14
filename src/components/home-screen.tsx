import { css } from "@linaria/core";
import thiefGif from "../game-assets/images/thief.gif";
import { gridCoordsList } from "../lib/util/grid-coords-list";
import { Button } from "./button";
import { globals } from "./global_css";
import { Heading } from "./heading";
import { Image, ImageSizeType } from "./image";
import { MenuScreen } from "./menu-screen";

const styles = css`
  background-color: var(--black);

  outline: var(--dev-outline, 2px limegreen dashed);

  display: grid;
  height: 100%;

  justify-content: center;
  align-content: center;
`;

export const large = css`
  width: var(--large-img);
  object-fit: contain;
`;

export const medium = css`
  width: var(--medium-img);
  object-fit: contain;
`;

export const small = css`
  width: var(--small-img);
  object-fit: contain;
`;

const wrap = css`
  position: relative;
`;

interface HomeScreenProps {
  onStartGameButtonClick: () => void;
}

export function HomeScreen({ onStartGameButtonClick }: HomeScreenProps) {
  console.log(gridCoordsList);
  return (
    <div className={`${globals} ${styles}`}>
      <MenuScreen>
        <Heading>Heading</Heading>
        <Image alt="Thief" size={ImageSizeType.Large} src={thiefGif} />
        <Button onClick={onStartGameButtonClick}>Start Game</Button>
      </MenuScreen>
    </div>
  );
}
