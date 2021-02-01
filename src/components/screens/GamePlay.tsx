import React from 'react';
import { Board } from '../common/Board';
import { Metrics } from '../common/Metrics';
import { Players } from '../common/Players';
import {
  Layout,
  LayoutBoard,
  LayoutMetrics,
  LayoutPlayers,
} from '../layouts/Layout';
import { UseHookSendType, UseHookStateType } from '../AppMachine';

interface GamePlayOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GamePlay = ({ state, send }: GamePlayOptions) => (
  <Layout>
    <LayoutBoard>
      <Board
        title="Boardgame"
        dice={state.context.gameDice}
        onRoll={(number: number) => send({ type: 'DICE_ROLL', number })}
        players={state.context.gamePlayers}
      />
    </LayoutBoard>
    <LayoutMetrics>
      <Metrics
        dice={state.context.gameDice}
        player={state.context.gamePlayers.find((p) => p.active)}
      />
    </LayoutMetrics>
    <LayoutPlayers>
      <Players players={state.context.gamePlayers} />
    </LayoutPlayers>
  </Layout>
);
