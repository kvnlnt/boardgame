import React from 'react';
import {
  UseHookSendType,
  UseHookStateType,
  Transition,
} from '../../machines/AppMachine';
import { Logo } from '../common/Logo';
import theme from '../../theme';
import { Typography } from '../common/Typography';

interface GameReadyOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GameReady = ({ state, send }: GameReadyOptions) => {
  const onStart = () => send(Transition.GAME_START);
  const onSetup = () => send(Transition.GAME_SETUP);
  const style = useStyles();
  return (
    <div style={style.screen}>
      <div style={style.header}>
        <Logo />
      </div>
      <div style={style.content}>
        <Typography text="youAreReady" />
      </div>
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  screen: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content auto',
    gridTemplateAreas: `'header' 'content'`,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.black_90,
    gridGap: theme.space,
  },
  header: {
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  content: {
    gridArea: 'content',
    margin: 20,
  },
});
