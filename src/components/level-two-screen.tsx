import { css } from "@linaria/core";
import treasure from "../game-assets/images/treasure.png";
import { gridCoordsList } from "../lib/util/grid-coords-list";
import { Button } from "./button";
import { globals } from "./global_css";
import { Heading } from "./heading";
import { Image, ImageSizeType } from "./image";
import { MenuScreen } from "./menu-screen";
import { menuScreenStyles } from "./shared-screen-styles";

interface LevelTwoScreenProps {
  onSimulateWalkingButtonClick: () => void;
  onPlayerDiedButtonClick: () => void;
}

export function LevelTwoScreen({
  onSimulateWalkingButtonClick,
  onPlayerDiedButtonClick,
}: LevelTwoScreenProps) {
  return (
    <div className={`${globals} ${menuScreenStyles}`}>
      <MenuScreen>
        <Heading>Level 2</Heading>
        <Image alt="Treasure chest" size={ImageSizeType.Large} src={treasure} />
        <Button onClick={onSimulateWalkingButtonClick}>
          Walk Through Door
        </Button>
        <Button onClick={onPlayerDiedButtonClick}>Player Died</Button>
      </MenuScreen>
    </div>
  );
}
