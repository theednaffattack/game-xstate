import { css } from "@linaria/core";
import heart from "../game-assets/images/heart.png";
import { Image, ImageSizeType } from "./image";

interface HealthProps {
  health: number;
}

const layoutStyles = css`
  display: flex;
  &::not(::first-child) {
    margin-left: 0.5em;
  }
`;

export function Health({ health }: HealthProps) {
  return (
    <div className={layoutStyles}>
      {Array(health)
        .fill(undefined)
        .map((_, healthIndex) => {
          return (
            <Image
              alt="health"
              key={healthIndex}
              src={heart}
              size={ImageSizeType.Small}
            />
          );
        })}
    </div>
  );
}
