import React from 'react';
import TestIds from '../../test/testIds';
import theme from '~/design/theme';
import { Button } from '../../design/Buttons/Button';

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
