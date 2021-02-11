import React from 'react';
import { Player } from '~/entities/Player';
import theme from '~/theme';

interface PlayerCardOpts {
  player: Player;
  onRemove: (player: Player) => void;
}

export const PlayerCard = ({ player, onRemove }: PlayerCardOpts) => {
  const style = useStyles();
  return (
    <div style={style.card}>
      <div style={style.title}>{player.name}</div>
      <button style={style.button} onClick={() => onRemove(player)}>
        X
      </button>
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  card: {
    color: theme.white_40,
    padding: 20,
    marginBottom: 20,
    border: `1px dotted ${theme.white_50}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
  },
  button: {
    width: 'max-content',
  },
});
