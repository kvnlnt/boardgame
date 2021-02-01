import React from 'react';
import {
  Layout,
  LayoutBoard,
  LayoutPlayers,
  LayoutMetrics,
} from './layouts/Layout';
import { Board } from './common/Board';
import { Metrics } from './common/Metrics';
import { Players } from './common/Players';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';
import { GamePlay } from './screens/GamePlay';

export const App = () => {
  const [state, send] = useMachine(AppMachine, {});
  switch (state.context.screen) {
    case 'gameSetup':
      return 'setup';
    case 'gamePlay':
      return <GamePlay state={state} send={send} />;
    case 'gameEnd':
      return 'gameEnd';
  }
};
