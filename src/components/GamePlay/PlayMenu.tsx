import React from 'react';
import TestIds from '../../lib/TestIds';
import theme from '~/theme';

interface PlayMenuProps {
  onSettingsClick: () => void;
}

export const PlayMenu = ({ onSettingsClick }: PlayMenuProps) => {
  const style = useStyles();
  return (
    <div>
      <button
        style={style.button}
        data-testid={TestIds.button_settings}
        onClick={onSettingsClick}
      >
        ⚙
      </button>
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
