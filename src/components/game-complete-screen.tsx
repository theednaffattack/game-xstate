import { css } from "@linaria/core";
import treasure from "../game-assets/images/treasure.png";
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

interface GameOverProps {
  onGoHomeButtonClick: () => void;
}

export function GameCompleteScreen({ onGoHomeButtonClick }: GameOverProps) {
  return (
    <div className={`${globals} ${styles}`}>
      <MenuScreen>
        <Heading>Quest Complete</Heading>
        <Image alt="Treasure chest" size={ImageSizeType.Large} src={treasure} />
        <Button autofocus onClick={onGoHomeButtonClick}>
          Restart
        </Button>
      </MenuScreen>
    </div>
  );
}
