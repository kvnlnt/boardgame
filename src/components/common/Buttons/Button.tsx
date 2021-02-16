import React, { useState } from 'react';
import { clx } from '../../../theme';

export interface ButtonProps {
  onClick?: () => any;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  children,
  disabled = false,
}: ButtonProps) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };
  return (
    <button
      type="button"
      className={clx([
        'border_style_solid',
        'border_width_1',
        'fs_m',
        'padding_x_20',
        'padding_y_5',
        'bg_color_trans',
        'bg_color_white_05_on_hover',
        disabled ? 'border_color_white_10' : 'border_color_white_20',
        disabled ? 'color_white_10' : 'color_white_50',
        disabled ? 'cursor_default' : 'cursor_pointer',
        disabled ? 'pointer_events_none' : null,
      ])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
