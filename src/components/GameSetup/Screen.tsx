import React from 'react';
import {
  UseHookSendType,
  UseHookStateType,
  Transition,
} from '../../machines/AppMachine';
import { Menu } from './Menu';
import { Logo } from '../common/Logo';
import { PlayerForm } from './PlayerForm';
import { PlayerCard } from './PlayerCard';
import { Player, PlayerPieces } from '~/entities/Player';
import theme from '../../theme';
import { Typography } from '../common/Typography';

interface GameSetupOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const GameSetup = ({ state, send }: GameSetupOptions) => {
  const onStart = () => send(Transition.GAME_START);
  const style = useStyles();
  const handlePlayerFormSubmit = (player: Player) =>
    send(Transition.ADD_PLAYER, player);
  const handlePlayerRemoval = (player: Player) =>
    send(Transition.REMOVE_PLAYER, player);
  const handleSetPlayerActive = (player: Player) =>
    send(Transition.SET_ACTIVE_PLAYER, { player });
  const handleMove = (dir: 'up' | 'down', player: Player) =>
    send(Transition.CHANGE_PLAYER_ORDER, { player, dir });
  const handleGameReady = () => send(Transition.GAME_READY);
  const usedPieces = state.context.gamePlayers.map((player) => player.piece);
  const availablePieces = PlayerPieces.filter(
    (piece) => !usedPieces.includes(piece)
  );
  return (
    <div style={style.screen}>
      <div style={style.header}>
        <Logo />
        <Typography text="setup" size="normal" uppercase={true} />
        {availablePieces.length === 0 && (
          <div style={style.message}>
            <Typography text="youAreReady" mood="success" />
          </div>
        )}
        <Menu onStart={onStart} />
      </div>
      {availablePieces.length > 0 && (
        <div style={style.form}>
          <PlayerForm
            pieces={availablePieces}
            players={state.context.gamePlayers}
            onSubmit={handlePlayerFormSubmit}
          ></PlayerForm>
        </div>
      )}
      {state.context.gamePlayers && (
        <div style={style.players}>
          {state.context.gamePlayers.map((player: Player, idx: number) => (
            <PlayerCard
              onRemove={handlePlayerRemoval}
              onClick={() => handleSetPlayerActive(player)}
              player={player}
              key={player.name}
              moveUp={idx === 0 ? null : () => handleMove('up', player)}
              moveDown={
                idx === state.context.gamePlayers.length - 1
                  ? null
                  : () => handleMove('down', player)
              }
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
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'min-content auto',
    gridTemplateAreas: `'header header' 'form players'`,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.black_90,
    gridGap: theme.space,
  },
  header: {
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  form: {
    gridArea: 'form',
    margin: 20,
  },
  message: {
    margin: 20,
  },
  players: {
    display: 'grid',
    gridArea: 'players',
    margin: 20,
    gridGap: 10,
    gridAutoRows: 'auto',
    gridAutoColumns: 'auto',
  },
});
