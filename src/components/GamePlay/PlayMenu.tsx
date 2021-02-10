import './PlayMenu.css';
import React from 'react';
import TestIds from '../../lib/TestIds';

interface PlayMenuProps {
  onSettingsClick: () => void;
}

export const PlayMenu = ({ onSettingsClick }: PlayMenuProps) => (
  <div className="play_menu">
    <button
      data-testid={TestIds.button_settings}
      className="play_menu__button"
      onClick={onSettingsClick}
    >
      ⚙
    </button>
  </div>
);
