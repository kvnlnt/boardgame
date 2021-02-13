import React from 'react';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';
import { GamePlay } from './GamePlay/Screen';
import { GameSetup } from './GameSetup/Screen';
import { GameReady } from './GameReady/Screen';

export const App = () => {
  const [state, send] = useMachine(AppMachine);
  let screen;
  switch (state.value) {
    case 'gameReady':
      screen = <GameReady state={state} send={send} />;
      break;
    case 'gameSetup':
      screen = <GameSetup state={state} send={send} />;
      break;
    case 'gamePlay':
      screen = <GamePlay state={state} send={send} />;
      break;
    case 'gameEnd':
      screen = 'gameEnd';
      break;
  }
  return <div>{screen}</div>;
};
