import './Board.css';
import React from 'react';
import { Dice } from './dice';
import { Card } from './Card';
import { Player } from '~/entities/Player';
import { Logo } from '../common/Logo';

export interface BoardProps {
  onRoll: (number: number) => void;
  dice: number;
  players: Player[];
}

const Slot = ({ pos, players }: { pos: number; players: Player[] }) => (
  <div>
    {players.filter((player) => player.position === pos).map((i) => i.name)}
  </div>
);

export const Board = ({ players, dice, onRoll }: BoardProps) => (
  <div className="board">
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
    <div className="board__center">
      <Logo />
      <Dice face={dice} size={50} speed={50} onRoll={onRoll} />
    </div>
  </div>
);
