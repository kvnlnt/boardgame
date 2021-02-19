import React from 'react';
import { Dice } from './dice';
import { Card } from './Card';
import { Player } from '~/entities/Player';
import { Logo } from '../../design/Logo';
import theme from '~/design/theme';

interface PieceOpts {
  player: Player;
}

const Piece = ({ player }: PieceOpts) => {
  const style = useStyles();
  return (
    <div
      style={{ ...style.piece, ...(player.active ? style.pieceActive : {}) }}
    >
      {player.piece}
    </div>
  );
};

interface SlotOps {
  pos: number;
  players: Player[];
}

const Slot = ({ pos, players }: SlotOps) => (
  <div>
    {players
      .filter((player) => player.position === pos)
      .map((player) => (
        <Piece player={player} key={player.name} />
      ))}
  </div>
);

export interface BoardProps {
  onRoll: (number: number) => void;
  dice: number;
  players: Player[];
}
export const Board = ({ players, dice, onRoll }: BoardProps) => {
  const style = useStyles();
  return (
    <div style={style.board}>
      <div>
        <Card name="1">
          <Slot pos={1} players={players} />
        </Card>
      </div>
      <div>
        <Card name="2">
          <Slot pos={2} players={players} />
        </Card>
      </div>
      <div>
        <Card name="3">
          <Slot pos={3} players={players} />
        </Card>
      </div>
      <div>
        <Card name="4">
          <Slot pos={4} players={players} />
        </Card>
      </div>
      <div>
        <Card name="5">
          <Slot pos={5} players={players} />
        </Card>
      </div>
      <div>
        <Card name="16">
          <Slot pos={16} players={players} />
        </Card>
      </div>
      <div>
        <Card name="6">
          <Slot pos={6} players={players} />
        </Card>
      </div>
      <div>
        <Card name="15">
          <Slot pos={15} players={players} />
        </Card>
      </div>
      <div>
        <Card name="7">
          <Slot pos={7} players={players} />
        </Card>
      </div>
      <div>
        <Card name="14">
          <Slot pos={14} players={players} />
        </Card>
      </div>
      <div>
        <Card name="8">
          <Slot pos={8} players={players} />
        </Card>
      </div>
      <div>
        <Card name="13">
          <Slot pos={13} players={players} />
        </Card>
      </div>
      <div>
        <Card name="12">
          <Slot pos={12} players={players} />
        </Card>
      </div>
      <div>
        <Card name="11">
          <Slot pos={11} players={players} />
        </Card>
      </div>
      <div>
        <Card name="10">
          <Slot pos={10} players={players} />
        </Card>
      </div>
      <div>
        <Card name="9">
          <Slot pos={9} players={players} />
        </Card>
      </div>
      <div style={style.center}>
        <Logo />
        <Dice face={dice} size={50} speed={50} onRoll={onRoll} />
      </div>
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  board: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(5, 1fr)',
    margin: 10,
  },
  center: {
    gridColumn: '2/5',
    gridRow: '2/5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  piece: {
    fontSize: 24,
    display: 'inline-block',
    color: theme.white_30,
  },
  pieceActive: {
    color: theme.white,
  },
});
