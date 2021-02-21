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
import theme, { atomize } from '../../design/theme';
import { Typography } from '../../design/Typography';
import { Toast } from '~/design/Messaging/Toast';

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
  const usedPieces = state.context.players.map((player) => player.piece);
  const availablePieces = PlayerPieces.filter(
    (piece) => !usedPieces.includes(piece)
  );
  return (
    <>
      {state.context.players.length === 6 && (
        <Toast
          toasts={[
            {
              message: 'youAreReady',
              buttons: [{ text: 'startGame', onClick: onStart }],
            },
          ]}
        />
      )}
      <div style={style.screen}>
        <div style={style.header}>
          <Logo />
          <div className={atomize('padding_bottom_xl')}>
            <Typography text="setup" fontSize="normal" uppercase={true} />
          </div>
          <Menu onStart={onStart} />
        </div>
        {state.context.players.length < 6 && (
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
    </>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  screen: {
    display: 'grid',
    gridTemplateColumns: 'min-content auto',
    gridTemplateRows: 'min-content auto',
    gridTemplateAreas: `'header header' 'form players'`,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.black_90,
  },
  header: {
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  form: {
    gridArea: 'form',
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
