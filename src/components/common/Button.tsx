import React, { useState } from 'react';
import theme from '~/theme';

type ButtonMode = 'normal' | 'normal_on_hover' | 'disabled';

interface ButtonProps {
  mode?: ButtonMode;
  onClick?: () => any;
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({
  mode = 'normal',
  onClick,
  children,
  type = 'button',
}: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const style = useStyles();
  const handleClick = (e) => {
    e.stopPropagation();
    if (mode === 'disabled') return null;
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{ ...style[mode], ...(hover ? style[mode + '_on_hover'] : {}) }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

const useStyles = (): { [key in ButtonMode]: React.CSSProperties } => ({
  normal: {
    width: 'max-content',
    color: theme.white,
    padding: 10,
    backgroundColor: 'transparent',
  },
  normal_on_hover: {
    color: theme.white_50,
  },
  disabled: {
    width: 'max-content',
    padding: 10,
    backgroundColor: 'transparent',
    color: theme.white_20,
  },
});
