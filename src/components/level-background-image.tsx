import { css } from "@linaria/core";

interface LevelBackgroundImageProps {
  src: HTMLImageElement["src"];
  alt?: string;
}

const levelPositioning = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function LevelBackgroundImage({ alt, src }: LevelBackgroundImageProps) {
  return <img alt={alt} src={src} className={levelPositioning} />;
}
