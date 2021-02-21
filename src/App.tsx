import React from 'react';
import ReactDOM from 'react-dom';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';
import { PlayingTheGame } from './states/PlayingTheGame';
import { SettingUpNewGame } from './states/SettingUpNewGame';
import { CreateStyleSheet, Css } from './design/theme';

export const App = () => {
  const [state, send] = useMachine(AppMachine);
  CreateStyleSheet(Css);
  let screen;
  switch (state.value) {
    case 'settingUpNewGame':
      screen = <SettingUpNewGame state={state} send={send} />;
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
