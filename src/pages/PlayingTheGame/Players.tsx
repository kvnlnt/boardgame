import React from 'react';
import { Player } from '~/domain/entities/Player';
import theme from '~/design/atoms';

export interface PlayersProps {
  players: Player[];
}

export const Players = ({ players }: PlayersProps) => {
  const style = useStyles();
  return (
    <div style={style.cards}>
      {players.map((player, idx) => (
        <div
          style={{ ...style.card, ...(player.active ? style.active : {}) }}
          key={`player-${idx}`}
        >
          <div style={style.title}>{player.name}</div>
          <div style={style.body}>
            <div
              style={{
                ...style.piece,
                ...(player.active ? style.pieceActive : {}),
              }}
            >
              {player.piece}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const useStyles = (): { [key: string]: React.CSSProperties } => ({
  cards: {
    display: 'grid',
    gridGap: 10,
    gridAutoFlow: 'row',
    gridAutoColumns: '1fr',
    color: theme.white,
    margin: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.white,
    border: '1px dashed ' + theme.white_10,
    height: '100%',
    flex: 1,
  },
  active: {
    border: '5px solid ' + theme.white_60,
  },
  title: {
    color: theme.white_30,
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    backgroundColor: theme.white_05,
    padding: 5,
    margin: 3,
  },
  body: {
    display: 'flex',
    color: theme.white_60,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  piece: {
    fontSize: 36,
    color: theme.white_30,
  },
  pieceActive: {
    color: theme.white,
  },
});
