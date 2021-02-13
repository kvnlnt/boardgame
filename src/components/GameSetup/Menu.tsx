import React from 'react';
import { Text } from '../common/Text';
import theme from '~/theme';
import { Button } from '../common/Button';

interface SetupMenuProps {
  onStart: () => void;
}

export const Menu = ({ onStart }: SetupMenuProps) => {
  const style = useStyles();
  return (
    <div style={style.menu}>
      <Button onClick={onStart}>{Text('startGame')}</Button>
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
