import React from 'react';
import ReactDOM from 'react-dom';
import { useMachine } from '@xstate/react';
import { AppMachine } from './AppMachine';
import { PlayingTheGame } from './states/PlayingTheGame';
import { SettingUpNewGame } from './states/SettingUpNewGame';
import { StartTheGameAlready } from './states/StartTheGameAlready';
import { CreateStyleSheet, Css } from './design/theme';

export const App = () => {
  const [state, send] = useMachine(AppMachine);
  CreateStyleSheet(Css);
  let screen;
  console.log(state.value);
  switch (state.value) {
    case 'startTheGameAlready':
      screen = <StartTheGameAlready state={state} send={send} />;
      break;
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
