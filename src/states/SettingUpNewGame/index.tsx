import React from 'react';
import {
  UseHookSendType,
  UseHookStateType,
  Transition,
} from '../../AppMachine';
import { Menu } from './Menu';
import { Logo } from '../../design/Logo';
import { PlayerForm } from './PlayerForm';
import { PlayerCard } from './PlayerCard';
import { Player, PlayerPieces } from '../../entities/Player';
import theme from '../../design/theme';
import { Typography } from '../../design/Typography';

interface SetupOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const SettingUpNewGame = ({ state, send }: SetupOptions) => {
  const onStart = () => send(Transition.START_GAME);
  const style = useStyles();
  const handlePlayerFormSubmit = (player: Player) =>
    send(Transition.ADD_PLAYER, player);
  const handlePlayerRemoval = (player: Player) =>
    send(Transition.REMOVE_PLAYER, player);
  const handleSetPlayerActive = (player: Player) =>
    send(Transition.SET_ACTIVE_PLAYER, { player });
  const handleMove = (dir: 'up' | 'down', player: Player) =>
    send(Transition.CHANGE_PLAYER_ORDER, { player, dir });
  const handleReady = () => send(Transition.PUSH_TO_START_GAME);
  const usedPieces = state.context.players.map((player) => player.piece);
  const availablePieces = PlayerPieces.filter(
    (piece) => !usedPieces.includes(piece)
  );
  return (
    <div style={style.screen}>
      <div style={style.header}>
        <Logo />
        <Typography text="setup" fontSize="normal" uppercase={true} />
        {availablePieces.length === 0 && (
          <div style={style.message}>
            <Typography text="youAreReady" condition="success" />
          </div>
        )}
        <Menu onStart={onStart} />
      </div>
      {availablePieces.length > 0 && (
        <div style={style.form}>
          <PlayerForm
            pieces={availablePieces}
            players={state.context.players}
            onSubmit={handlePlayerFormSubmit}
          ></PlayerForm>
        </div>
      )}
      {state.context.players && (
        <div style={style.players}>
          {state.context.players.map((player: Player, idx: number) => (
            <PlayerCard
              onRemove={handlePlayerRemoval}
              onClick={() => handleSetPlayerActive(player)}
              player={player}
              key={player.name}
              moveUp={idx === 0 ? null : () => handleMove('up', player)}
              moveDown={
                idx === state.context.players.length - 1
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
