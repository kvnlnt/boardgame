import React from 'react';
import {
  UseHookSendType,
  UseHookStateType,
  Transition,
} from '../../AppMachine';
import { Menu } from './Menu';
import { Logo } from '../../design/elements/Images/Logo';
import { PlayerForm } from './PlayerForm';
import { PlayerCard } from './PlayerCard';
import { Player, PlayerPieces } from '../../domain/entities/Player';
import theme, { atomize } from '../../design/atoms';
import { Typography } from '../../design/elements/Typography/Typography';
import { Toast } from '~/design/elements/Messaging/Toast';

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
      <div
        style={style.screen}
        className={atomize('bg_color_black_90', 'height_100')}
      >
        <div
          style={style.header}
          className={atomize(
            'display_flex',
            'padding_xl',
            'justify_content_space_between'
          )}
        >
          <div className={atomize('display_flex', 'align_items_center')}>
            <Logo />
            <div className={atomize('margin_left_xl')}>
              <Typography text="setup" fontSize="normal" uppercase={true} />
            </div>
          </div>
          <Menu onStart={onStart} />
        </div>
        {state.context.players.length < 6 && (
          <div style={style.form} className={atomize('padding_xl')}>
            <PlayerForm
              pieces={availablePieces}
              players={state.context.players}
              onSubmit={handlePlayerFormSubmit}
            ></PlayerForm>
          </div>
        )}
        {state.context.players && (
          <div style={style.players} className={atomize('padding_xl')}>
            {state.context.players.map((player: Player, idx: number) => (
              <div key={player.name} className={atomize('margin_bottom_l')}>
                <PlayerCard
                  onRemove={handlePlayerRemoval}
                  onClick={() => handleSetPlayerActive(player)}
                  player={player}
                  moveUp={idx === 0 ? null : () => handleMove('up', player)}
                  moveDown={
                    idx === state.context.players.length - 1
                      ? null
                      : () => handleMove('down', player)
                  }
                />
              </div>
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
  },
  header: {
    gridArea: 'header',
  },
  form: {
    gridArea: 'form',
  },
  players: {
    gridArea: 'players',
  },
});
