import React from 'react';
import { Button } from '../../design/elements/Buttons/Button';

interface PlayMenuProps {
  onSettingsClick: () => void;
}

export const PlayMenu = ({ onSettingsClick }: PlayMenuProps) => {
  return (
    <div>
      <Button onClick={onSettingsClick} text="setup" />
    </div>
  );
};
