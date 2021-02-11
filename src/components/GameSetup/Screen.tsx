import React from 'react';
import { UseHookSendType, UseHookStateType } from '../AppMachine';
import { Menu } from './Menu';
import { Logo } from '../common/Logo';
import { PlayerForm } from './PlayerForm';
import { PlayerCard } from './PlayerCard';
import { Player } from '~/entities/Player';
import theme from '../../theme';
import { Typography } from '../common/Typography';

interface GameSetupOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GameSetup = ({ state, send }: GameSetupOptions) => {
  const onReady = () => send('GAME_START');
  const style = useStyles();
  const handlePlayerFormSubmit = (player: Player) => {
    send('ADD_PLAYER', player);
  };
  const handlePlayerRemoval = (player: Player) => {
    send('REMOVE_PLAYER', player);
  };
  return (
    <div style={style.screen}>
      <div style={style.header}>
        <Logo />
        <Menu onReady={onReady} />
      </div>
      <div style={style.form}>
        <Typography text="addPlayer" size="big" />
        <PlayerForm
          players={state.context.gamePlayers}
          onSubmit={handlePlayerFormSubmit}
        ></PlayerForm>
      </div>
      {state.context.gamePlayers && (
        <div style={style.players}>
          <div style={{ marginBottom: 20 }}>
            <Typography text="players" size="big" />
          </div>
          {state.context.gamePlayers.map((player: Player) => (
            <PlayerCard
              onRemove={handlePlayerRemoval}
              player={player}
              key={player.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  screen: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'min-content auto',
    gridTemplateAreas: `'header header' 'form players'`,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.black_90,
    gridGap: theme.space,
  },
  header: {
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  form: {
    gridArea: 'form',
    margin: 20,
  },
  players: {
    gridArea: 'players',
    margin: 20,
  },
});
