import './players.css';
import React from 'react';
import { Player } from '~/entities/Player';

export interface PlayersProps {
  players: Player[];
}

export const Players = ({ players }: PlayersProps) => (
  <div className="players">
    {players.map((player) => (
      <div className="player">
        <div className="player__name">{player.name}</div>
      </div>
    ))}
  </div>
);
