import React, { useState } from 'react';
import { styles } from '../../../theme';

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
  const [hover, setHover] = useState<boolean>(false);
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };
  return (
    <button
      type="button"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={styles([
        ['bg_color_trans'],
        ['bg_color_white_05', hover],
        ['border_color_white_20'],
        ['border_style_solid'],
        ['border_width_1'],
        ['color_white_50'],
        ['color_white', hover],
        ['cursor_pointer'],
        ['fs_m'],
        ['padding_x_20'],
        ['padding_y_5'],
        ['color_white_20', disabled],
        ['cursor_default', disabled],
        ['pointer_events_none', disabled],
        ['border_color_white_10', disabled],
      ])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
