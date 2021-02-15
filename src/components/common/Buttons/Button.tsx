import React, { useState } from 'react';
import { styles } from '../../../theme';

export interface ButtonProps {
  onClick?: () => any;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
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
        ['fs_m'],
        ['cursor_pointer'],
        ['bg_color_black_80'],
        ['border_none'],
        ['color_white_50'],
        ['color_white_05', hover],
      ])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// const styles = makeStyles({
//   normal: {
//     width: 'max-content',
//     color: theme.white_50,
//     padding: '5px 20px',
//     backgroundColor: 'transparent',
//     border: `1px solid ${theme.white_20}`,
//     fontSize: 12,
//     cursor: 'pointer',
//   },
//   normal_on_hover: {
//     color: theme.white,
//     backgroundColor: theme.white_05,
//     transition: 'all 0.5s',
//     border: `1px solid ${theme.white}`,
//     cursor: 'pointer',
//   },
//   disabled: {
//     width: 'max-content',
//     color: theme.white_20,
//     padding: '5px 20px',
//     backgroundColor: 'transparent',
//     border: `1px solid ${theme.white_10}`,
//     fontSize: 12,
//     cursor: 'pointer',
//   },
// });
