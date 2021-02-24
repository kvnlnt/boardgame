import React from 'react';
import { Board } from './Board';
import { Metrics } from './Metrics';
import { Players } from './Players';
import {
  Transition,
  UseHookSendType,
  UseHookStateType,
} from '../../AppMachine';
import { PlayMenu } from './PlayMenu';
import theme from '~/design/atoms';

interface PlayOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const PlayingTheGame = ({ state, send }: PlayOptions) => {
  const style = useStyles();
  return (
    <div style={style.screen}>
      <div style={style.board}>
        <Board
          dice={state.context.dice}
          onRoll={(number: number) =>
            send({ type: Transition.ROLL_DICE, number })
          }
          players={state.context.players}
        />
      </div>
      <div style={style.players}>
        <Players players={state.context.players} />
      </div>
      <div style={style.metrics}>
        <Metrics
          dice={state.context.dice}
          player={state.context.players.find((p) => p.active)}
        />
      </div>
      <div style={style.menu}>
        <PlayMenu onSettingsClick={() => send(Transition.SETUP_GAME)} />
      </div>
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  screen: {
    display: 'grid',
    gridTemplateColumns: 'auto 200px',
    gridTemplateRows: 'auto 100px',
    gridTemplateAreas: "'board players' 'metrics menu'",
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.black_90,
  },

  board: {
    gridArea: 'board',
    borderRight: '1px solid ' + theme.white_10,
    display: 'grid',
  },

  players: {
    gridArea: 'players',
    display: 'grid',
  },

  metrics: {
    borderTop: '1px solid ' + theme.white_10,
    gridArea: 'metrics',
    display: 'grid',
  },

  menu: {
    borderTop: '1px solid ' + theme.white_10,
    gridArea: 'menu',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
