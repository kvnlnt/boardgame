import React from 'react';
import { Button } from '../../design/Buttons/Button';

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
