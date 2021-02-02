import "./GameSetup.css";
import React from "react";
import { UseHookSendType, UseHookStateType } from "../AppMachine";
import { SetupMenu } from "../common/SetupMenu";
import { Logo } from "../common/Logo";

interface GameSetupOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GameSetup = ({ state, send }: GameSetupOptions) => {
  const onReady = () => send("GAME_START");
  return (
    <div className="game_setup">
      <div className="game_setup__header">
        <Logo />
        <SetupMenu onReady={onReady} />
      </div>
      <div className="game_setup__content">content</div>
    </div>
  );
};
