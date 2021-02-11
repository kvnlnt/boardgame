import React from 'react';
import { Player } from '~/entities/Player';

export interface PlayersProps {
  players: Player[];
}

export const Players = ({ players }: PlayersProps) => (
  <div className="cards--in-rows">
    {players.map((player, idx) => (
      <div
        className={`card ${player.active && 'card--active'}`}
        key={`player-${idx}`}
      >
        <div className="card__title">{player.name}</div>
        <div className="card__body">{player.name}</div>
      </div>
    ))}
  </div>
);
const useStyles = (): { [key: string]: React.CSSProperties } => ({});
