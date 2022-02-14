import { css } from "@linaria/core";
import { Button } from "./button";
import { globals } from "./global_css";
import { Heading } from "./heading";
import { ImageSizeType } from "./image";
import { MenuScreen } from "./menu-screen";
import { Image } from "./image";
import { GRID_SQUARE_SIZE } from "../lib/constants";

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

export function App() {
  return (
    <div className={`${globals} ${styles}`}>
      <MenuScreen>
        <Heading>Heading</Heading>
        <p>
          <Image size={ImageSizeType.Large} />
          <Image size={ImageSizeType.Medium} />
          <Image size={ImageSizeType.Small} />
          {/* <Image src={thiefGif} alt="Thief" size={ImageSizeType.Large} /> */}
        </p>
        <Button>Start Game</Button>
        {/* <Button>Game Over</Button> */}
        {/* <Button>Restart Game</Button> */}
      </MenuScreen>
    </div>
  );
}
