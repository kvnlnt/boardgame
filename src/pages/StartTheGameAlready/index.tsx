import React from 'react';
import {
  UseHookSendType,
  UseHookStateType,
  Transition,
} from '../../machines/AppMachine';
import { Logo } from '../../design/Logo';
import theme from '../../design/theme';
import { Typography } from '../../design/Typography';

interface ReadyOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const StartTheGameAlready = ({ state, send }: ReadyOptions) => {
  const onStart = () => send(Transition.START_GAME);
  const onSetup = () => send(Transition.SETUP_GAME);
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
