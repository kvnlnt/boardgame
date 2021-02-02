import React from "react";
import { useMachine } from "@xstate/react";
import { AppMachine } from "./AppMachine";
import { GamePlay } from "./screens/GamePlay";
import { GameSetup } from "./screens/GameSetup";

export const App = () => {
  const [state, send] = useMachine(AppMachine, {});
  switch (state.context.screen) {
    case "gameSetup":
      return <GameSetup state={state} send={send} />;
    case "gamePlay":
      return <GamePlay state={state} send={send} />;
    case "gameEnd":
      return "gameEnd";
  }
};
