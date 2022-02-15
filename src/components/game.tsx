import { css } from "@linaria/core";
import { useMachine } from "@xstate/react";
import React, { useEffect } from "react";
import levelOneBackground from "../game-assets/images/level1Background.png";
import levelTwoBackground from "../game-assets/images/level2Background.png";
import levelThreeBackground from "../game-assets/images/level3Background.png";
import { gameMachine } from "../machines/game-machine";
import { GameEventType } from "../machines/game-machine-types";
import { Button } from "./button";
import { GameCompleteScreen } from "./game-complete-screen";
import { GameOver } from "./game-over-screen";
import { Grid } from "./grid";
import { HomeScreen } from "./home-screen";
import { LevelBackgroundImage } from "./level-background-image";
import { Monster } from "./monster";
import Player from "./player";
import { Treasure } from "./treasure";

type Props = {
  fastForwardEvents?: GameEventType[];
};

const lightText = css`
  color: var(--white);
`;

export function Game({ fastForwardEvents }: Props) {
  const [state, send] = useMachine(gameMachine);
  const { playerActor, monsterActor } = state.children;

  useEffect(() => {
    if (fastForwardEvents) {
      fastForwardEvents.forEach((event: GameEventType) => {
        send(event);
      });
    }
  }, [fastForwardEvents, send]);

  if (state.matches("home")) {
    return (
      <HomeScreen onStartGameButtonClick={() => send("START_BUTTON_CLICKED")} />
    );
  }
  if (state.matches("gameComplete")) {
    return (
      <GameCompleteScreen
        onGoHomeButtonClick={() => send("HOME_BUTTON_CLICKED")}
      />
    );
  }
  if (state.matches("gameOver")) {
    return (
      <GameOver onRestartButtonClick={() => send("RESTART_BUTTON_CLICKED")} />
    );
  }
  if (state.matches("playing")) {
    if (state.matches("playing.level1")) {
      return (
        <>
          <LevelBackgroundImage src={levelOneBackground} />
          <Grid />
          <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
          <Button onClick={() => send("PLAYER_DIED")}>PLAYER DIED</Button>
        </>
      );
    }
    if (state.matches("playing.level2")) {
      return (
        <>
          <LevelBackgroundImage src={levelTwoBackground} />
          <Grid />
          <Grid>
            {playerActor && <Player actor={playerActor} />}
            {monsterActor && <Monster actor={monsterActor} />}
          </Grid>
          <Button onClick={() => send("PLAYER_DIED")}>PLAYER DIED</Button>
        </>
      );
    }
    if (state.matches("playing.level3")) {
      return (
        <>
          <LevelBackgroundImage src={levelThreeBackground} />
          <Grid />

          <Grid>
            {playerActor && <Player actor={playerActor} />}
            <Treasure />
          </Grid>
          <Button onClick={() => send("PLAYER_DIED")}>PLAYER DIED</Button>
        </>
      );
    }
    return (
      <>
        <p className={lightText}>state is playing</p>
        <Button onClick={() => send("PLAYER_DIED")}>PLAYER_DIED</Button>
        <Button onClick={() => send("PLAYER_GOT_TREASURE")}>
          PLAYER_GOT_TREASURE
        </Button>
      </>
    );
  }
  throw new Error(`Unknown game state: ${JSON.stringify(state, null, 2)}`);
}
