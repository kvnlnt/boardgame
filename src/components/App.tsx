import React from 'react';
import { Layout, LayoutBoard, LayoutPlayers, LayoutMetrics } from './Layout';
import { Board } from './Board';
import { Metrics } from './Metrics';
import { Players } from './Players';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';

export const App = () => {
  const [state, send] = useMachine(AppMachine, {});
  return (
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
};
