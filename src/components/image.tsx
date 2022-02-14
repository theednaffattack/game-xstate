import thiefGif from "../game-assets/images/thief.gif";
import { largeImg, mediumImg, smallImg } from "./shared-screen-styles";

export enum ImageSizeType {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

interface ImageProps {
  alt?: string;
  size?: ImageSizeType;
  src: HTMLImageElement["src"];
}

export function Image({ alt, size, src }: ImageProps) {
  if (size === ImageSizeType.Large) {
    return <img alt={alt} src={src} className={`largeImg ${largeImg}`} />;
  }
  if (size === ImageSizeType.Medium) {
    return <img alt={alt} src={src} className={`mediumImg ${mediumImg}`} />;
  }
  if (size === ImageSizeType.Small) {
    return <img alt={alt} src={src} className={`smallImg ${smallImg}`} />;
  }
  return <img alt={alt} src={src} className={`mediumImg ${mediumImg}`} />;
}
