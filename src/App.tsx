import React from 'react';
import ReactDOM from 'react-dom';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';
import { PlayingTheGame } from './pages/PlayingTheGame';
import { SettingUpNewGame } from './pages/SettingUpNewGame';
import { RenderStyles } from './lib/styles';
import { defaultTheme } from './design/themes';

export const App = () => {
  const [state, send] = useMachine(AppMachine);
  RenderStyles(defaultTheme);
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
