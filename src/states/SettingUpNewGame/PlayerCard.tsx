import React, { useState } from 'react';
import { Player } from '~/entities/Player';
import theme from '~/design/theme';
import { ButtonProps } from '../../design/Buttons/Button';
import { ButtonList } from '../../design/Buttons/List';

interface PlayerCardOpts {
  player: Player;
  onRemove: (player: Player) => void;
  moveUp?: (player: Player) => void;
  moveDown?: (player: Player) => void;
  onClick?: () => void;
}

export const PlayerCard = ({
  player,
  onRemove,
  moveUp,
  moveDown,
  onClick,
}: PlayerCardOpts) => {
  const [hover, setHover] = useState<boolean>(false);
  const style = useStyles({ hover, active: player.active });
  const buttons: ButtonProps[] = [];
  buttons.push({
    disabled: moveUp === null,
    onClick: () => moveUp(player),
    text: '↑',
  });
  buttons.push({
    disabled: moveDown === null,
    onClick: () => moveDown(player),
    text: '↓',
  });
  buttons.push({
    disabled: player.active,
    onClick: () => onRemove(player),
    text: 'X',
  });
  return (
    <div
      style={{
        ...style.card,
        ...(player.active ? style.cardActive : style.cardHover),
      }}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div style={style.piece}>{player.piece}</div>
      <div style={style.title}>{player.name}</div>
      <ButtonList buttons={buttons} />
    </div>
  );
};

const useStyles = ({
  hover,
  active,
}): { [key: string]: React.CSSProperties } => ({
  card: {
    color: active ? theme.white : theme.white_40,
    border: `1px solid ${theme.white_20}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
  },
  cardHover: {
    backgroundColor: hover ? theme.white_02 : 'transparent',
  },
  cardActive: {
    backgroundColor: active ? theme.white_05 : 'transparent',
  },
  title: {
    flex: 1,
  },
  piece: {
    fontSize: 24,
    paddingRight: 10,
  },
  button: {
    width: 'max-content',
    color: theme.white,
    padding: 10,
    backgroundColor: 'transparent',
  },
  buttonDisabled: {
    color: theme.white_20,
  },
});
