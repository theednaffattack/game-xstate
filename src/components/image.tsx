import thiefGif from "../game-assets/images/thief.gif";
import { large, medium, small } from "./app";

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
    return <img alt={alt} src={src} className={`large ${large}`} />;
  }
  if (size === ImageSizeType.Medium) {
    return <img alt={alt} src={src} className={`medium ${medium}`} />;
  }
  if (size === ImageSizeType.Small) {
    return <img alt={alt} src={src} className={`small ${small}`} />;
  }
  return <img alt={alt} src={src} className={`medium ${medium}`} />;
}
