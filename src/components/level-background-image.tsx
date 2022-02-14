import { css } from "@linaria/core";
import level1Background from "../game-assets/images/level1Background.png";

interface LevelBackgroundImageProps {
  // src: HTMLImageElement["src"];
  alt?: string;
}

const levelPositioning = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function LevelBackgroundImage({ alt }: LevelBackgroundImageProps) {
  return <img alt={alt} src={level1Background} className={levelPositioning} />;
}
