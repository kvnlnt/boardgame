import React from 'react';
import { Text } from '../common/Text';
import TestIds from '../../lib/TestIds';
import theme from '~/theme';

interface SetupMenuProps {
  onReady: () => void;
}

export const Menu = ({ onReady }: SetupMenuProps) => {
  const style = useStyles();
  return (
    <div style={style.menu}>
      <button data-testid={TestIds.button_ready} onClick={onReady}>
        {Text('play')}
      </button>
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.white,
  },
});
