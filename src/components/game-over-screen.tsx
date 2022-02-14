import { css } from "@linaria/core";
import skull from "../game-assets/images/skull.png";
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

interface GameOverProps {
  onRestartButtonClick: () => void;
}

export function GameOver({ onRestartButtonClick }: GameOverProps) {
  console.log(gridCoordsList);
  return (
    <div className={`${globals} ${styles}`}>
      <MenuScreen>
        <Heading>Game Over</Heading>
        <Image alt="Skull" size={ImageSizeType.Large} src={skull} />
        <Button onClick={onRestartButtonClick}>Restart</Button>
      </MenuScreen>
    </div>
  );
}
