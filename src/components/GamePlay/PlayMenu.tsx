import React from 'react';
import TestIds from '../../lib/TestIds';
import theme from '~/theme';
import { Button } from '../common/Button';

interface PlayMenuProps {
  onSettingsClick: () => void;
}

export const PlayMenu = ({ onSettingsClick }: PlayMenuProps) => {
  const style = useStyles();
  return (
    <div>
      <Button onClick={onSettingsClick}>⚙</Button>
    </div>
  );
};
const useStyles = (): { [key: string]: React.CSSProperties } => ({
  button: {
    color: theme.white,
    fontSize: 40,
    backgroundColor: 'transparent',
  },
});
