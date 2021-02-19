import React from 'react';
import { localize } from '../../lib/l10n/localize';
import theme from '~/design/theme';
import { Button } from '../../design/Buttons/Button';

interface SetupMenuProps {
  onStart: () => void;
}

export const Menu = ({ onStart }: SetupMenuProps) => {
  const style = useStyles();
  return (
    <div style={style.menu}>
      <Button onClick={onStart}>{localize('startGame')}</Button>
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
