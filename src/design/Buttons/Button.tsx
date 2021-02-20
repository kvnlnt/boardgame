import React from 'react';
import { atomize } from '../theme';

export interface ButtonProps {
  onClick?: () => any;
  text: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export const Button = ({
  onClick,
  text,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={atomize(
        'border_style_solid',
        'border_width_1',
        'fs_m',
        'padding_x_2xl',
        'padding_y',
        'bg_color_trans',
        'bg_color_white_05_on_hover',
        'width_100',
        disabled ? 'border_color_white_10' : 'border_color_white_20',
        disabled ? 'color_white_10' : 'color_white_50',
        disabled ? 'cursor_default' : 'cursor_pointer',
        disabled ? 'pointer_events_none' : null
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
