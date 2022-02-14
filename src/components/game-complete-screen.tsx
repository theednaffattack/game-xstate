import { css } from "@linaria/core";
import treasure from "../game-assets/images/treasure.png";
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
  onGoHomeButtonClick: () => void;
}

export function GameCompleteScreen({ onGoHomeButtonClick }: GameOverProps) {
  return (
    <div className={`${globals} ${styles}`}>
      <MenuScreen>
        <Heading>Quest Complete</Heading>
        <Image alt="Treasure chest" size={ImageSizeType.Large} src={treasure} />
        <Button onClick={onGoHomeButtonClick}>Restart</Button>
      </MenuScreen>
    </div>
  );
}
