import React from 'react';
import { atomize } from '~/design/theme';
import { Button } from '../../design/Buttons/Button';

interface SetupMenuProps {
  onStart: () => void;
}

export const Menu = ({ onStart }: SetupMenuProps) => {
  return (
    <div
      className={atomize(
        'display_flex',
        'justify_content_center',
        'align_items_center',
        'color_white'
      )}
    >
      <Button onClick={onStart} text="startGame" />
    </div>
  );
};
