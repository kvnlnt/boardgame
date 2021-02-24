import React from 'react';
import { Player } from '~/domain/entities/Player';
import { Card } from './Card';

export interface MetricsProps {
  dice: number;
  player: Player | null;
}

export const Metrics = ({ dice, player }: MetricsProps) => (
  <div className="cards--in-columns">
    {player && <Card name="Player">{player.name}</Card>}
    {dice > 0 && <Card name="Roll">{dice}</Card>}
  </div>
);
const useStyles = (): { [key: string]: React.CSSProperties } => ({});
