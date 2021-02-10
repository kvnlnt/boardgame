import './Screen.css';
import React from 'react';
import { Board } from './Board';
import { Metrics } from './Metrics';
import { Players } from './Players';
import { UseHookSendType, UseHookStateType } from '../AppMachine';
import { PlayMenu } from './PlayMenu';

interface GamePlayOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GamePlay = ({ state, send }: GamePlayOptions) => {
  return (
    <div className="screen">
      <div className="screen__board">
        <Board
          dice={state.context.gameDice}
          onRoll={(number: number) => send({ type: 'DICE_ROLL', number })}
          players={state.context.gamePlayers}
        />
      </div>
      <div className="screen__players">
        <Players players={state.context.gamePlayers} />
      </div>
      <div className="screen__metrics">
        <Metrics
          dice={state.context.gameDice}
          player={state.context.gamePlayers.find((p) => p.active)}
        />
      </div>
      <div className="screen__menu">
        <PlayMenu onSettingsClick={() => send('GAME_SETUP')} />
      </div>
    </div>
  );
};
