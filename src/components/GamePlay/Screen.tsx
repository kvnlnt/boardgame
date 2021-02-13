import React from 'react';
import { Board } from './Board';
import { Metrics } from './Metrics';
import { Players } from './Players';
import { Transition, UseHookSendType, UseHookStateType } from '../AppMachine';
import { PlayMenu } from './PlayMenu';
import theme from '~/theme';

interface GamePlayOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GamePlay = ({ state, send }: GamePlayOptions) => {
  const style = useStyles();
  return (
    <div style={style.screen}>
      <div style={style.board}>
        <Board
          dice={state.context.gameDice}
          onRoll={(number: number) =>
            send({ type: Transition.DICE_ROLL, number })
          }
          players={state.context.gamePlayers}
        />
      </div>
      <div style={style.players}>
        <Players players={state.context.gamePlayers} />
      </div>
      <div style={style.metrics}>
        <Metrics
          dice={state.context.gameDice}
          player={state.context.gamePlayers.find((p) => p.active)}
        />
      </div>
      <div style={style.menu}>
        <PlayMenu onSettingsClick={() => send(Transition.GAME_SETUP)} />
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
