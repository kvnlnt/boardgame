import "./GamePlay.css";
import React from "react";
import { Board } from "../common/Board";
import { Metrics } from "../common/Metrics";
import { Players } from "../common/Players";
import { UseHookSendType, UseHookStateType } from "../AppMachine";

interface GamePlayOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GamePlay = ({ state, send }: GamePlayOptions) => (
  <div className="game_play">
    <div className="game_play__board">
      <Board
        dice={state.context.gameDice}
        onRoll={(number: number) => send({ type: "DICE_ROLL", number })}
        players={state.context.gamePlayers}
      />
    </div>
    <div className="game_play__players">
      <Players players={state.context.gamePlayers} />
    </div>
    <div className="game_play__metrics">
      <Metrics
        dice={state.context.gameDice}
        player={state.context.gamePlayers.find((p) => p.active)}
      />
    </div>
  </div>
);
