import thiefGif from "../game-assets/images/thief.gif";
import { large, medium, small } from "./app";

export enum ImageSizeType {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export function Image({ size }: { size?: ImageSizeType }) {
  if (size === ImageSizeType.Large) {
    return <img src={thiefGif} className={`large ${large}`} />;
  }
  if (size === ImageSizeType.Medium) {
    return <img src={thiefGif} className={`medium ${medium}`} />;
  }
  if (size === ImageSizeType.Small) {
    return <img src={thiefGif} className={`small ${small}`} />;
  }
  return <img src={thiefGif} className={`medium ${medium}`} />;
}
