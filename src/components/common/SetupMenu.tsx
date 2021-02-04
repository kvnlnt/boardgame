import './SetupMenu.css';
import React from 'react';
import { Text } from './Text';
import TestIds from '../../lib/TestIds';

interface SetupMenuProps {
  onReady: () => void;
}

export const SetupMenu = ({ onReady }: SetupMenuProps) => (
  <div className="menu">
    <button data-testid={TestIds.button_ready} onClick={onReady}>
      {Text('ready')}
    </button>
  </div>
);
