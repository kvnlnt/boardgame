import './status.css';
import React from 'react';
import { Player } from '~/entities/Player';
import { Players } from './players';

export interface StatusProps {
  dice: number;
  player: Player | null;
}

export const Status = ({ dice, player }: StatusProps) => (
  <div className="status">
    {player && (
      <div className="status__cell">
        <div className="status__cell__key">Player</div>
        <div className="status__cell__value">{player.name}</div>
      </div>
    )}
    {dice > 0 && (
      <div className="status__cell">
        <div className="status__cell__key">Roll</div>
        <div className="status__cell__value">{dice}</div>
      </div>
    )}
  </div>
);
