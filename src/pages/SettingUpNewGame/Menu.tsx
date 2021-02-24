import React from 'react';
import { atomize } from '~/design/atoms';
import { Button } from '../../design/elements/Buttons/Button';

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
