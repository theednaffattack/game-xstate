import { css } from "@linaria/core";
import treasure from "../game-assets/images/treasure.png";
import { gridCoordsList } from "../lib/util/grid-coords-list";
import { Button } from "./button";
import { globals } from "./global_css";
import { Heading } from "./heading";
import { Image, ImageSizeType } from "./image";
import { MenuScreen } from "./menu-screen";
import { menuScreenStyles } from "./shared-screen-styles";

interface LevelOneScreenProps {
  onSimulateWalkingButtonClick: () => void;
  onPlayerDiedButtonClick: () => void;
}

export function LevelOneScreen({
  onSimulateWalkingButtonClick,
  onPlayerDiedButtonClick,
}: LevelOneScreenProps) {
  return (
    <div className={`${globals} ${menuScreenStyles}`}>
      <MenuScreen>
        <Heading>Level 1</Heading>
        <Image alt="Treasure chest" size={ImageSizeType.Large} src={treasure} />
        <Button onClick={onSimulateWalkingButtonClick}>
          Walk Up to Level 2
        </Button>
        <Button onClick={onPlayerDiedButtonClick}>Player Died</Button>
      </MenuScreen>
    </div>
  );
}
