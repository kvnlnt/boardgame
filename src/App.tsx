import React from 'react';
import ReactDOM from 'react-dom';
import { useMachine } from '@xstate/react';
import { AppMachine } from './machines/AppMachine';
import { GamePlay } from './components/GamePlay/Screen';
import { GameSetup } from './components/GameSetup/Screen';
import { GameReady } from './components/GameReady/Screen';

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

ReactDOM.render(<App />, document.getElementById('root'));
