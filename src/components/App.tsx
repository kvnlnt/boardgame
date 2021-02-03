import React from 'react';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';
import { GamePlay } from './screens/GamePlay';
import { GameSetup } from './screens/GameSetup';

export const App = () => {
  const [state, send] = useMachine(AppMachine);
  console.log(state);
  let screen;
  switch (state.value) {
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
  return screen;
};
