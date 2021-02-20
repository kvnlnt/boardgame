import React from 'react';
import { atomize } from '../theme';
import { Button, ButtonProps } from './Button';

interface ButtonListProps {
  buttons: ButtonProps[];
  direction?: 'row' | 'column';
}

export const ButtonList = ({
  buttons,
  direction = 'column',
}: ButtonListProps) => {
  return (
    <div
      className={atomize(
        'display_grid',
        direction === 'column' ? 'grid_flow_column' : 'grid_flow_row',
        'grid_gap_xl'
      )}
    >
      {buttons.map((props, idx) => (
        <Button key={idx} {...props} />
      ))}
    </div>
  );
};
