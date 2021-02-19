import React from 'react';
import ReactDOM from 'react-dom';
import { useMachine } from '@xstate/react';
import { AppMachine } from './machines/AppMachine';
import { PlayingTheGame } from './pages/PlayingTheGame';
import { StartingNewGame } from './pages/StartingNewGame';
import { StartTheGameAlready } from './pages/StartTheGameAlready';
import { CreateStyleSheet, Css } from './design/theme';

export const App = () => {
  const [state, send] = useMachine(AppMachine);
  CreateStyleSheet(Css);
  let screen;
  switch (state.value) {
    case 'startTheGameAlready':
      screen = <StartTheGameAlready state={state} send={send} />;
      break;
    case 'startingNewGame':
      screen = <StartingNewGame state={state} send={send} />;
      break;
    case 'playingTheGame':
      screen = <PlayingTheGame state={state} send={send} />;
      break;
    case 'gameOver':
      screen = 'end';
      break;
  }
  return <div>{screen}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
