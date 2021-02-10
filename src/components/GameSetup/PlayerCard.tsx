import React from 'react';
import { Player } from '~/entities/Player';
import theme from '~/theme';

export const PlayerCard = ({ player }: { player: Player }) => {
  const styles = useStyles();
  return <div style={styles.card}>{player.name}</div>;
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  card: {
    color: theme.white_40,
    padding: 20,
    marginBottom: 20,
    border: `1px dotted ${theme.white_50}`,
  },
});
