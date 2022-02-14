import { useMachine } from "@xstate/react";
import React from "react";
import { gameMachine } from "../machines/game-machine";

type Props = {};

export function Game({}: Props) {
  const [state, send] = useMachine(gameMachine);
  if (state.matches("home")) {
    return <p>state is home</p>;
  }
  if (state.matches("gameComplete")) {
    return <p>state is game complete</p>;
  }
  if (state.matches("gameOver")) {
    <p>state is game over</p>;
  }
  if (state.matches("playing")) {
    <p>state is playing</p>;
  }
  throw new Error(`Unknown game state: ${state.value}`);
}
