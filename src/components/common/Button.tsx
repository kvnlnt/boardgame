import React, { useState } from 'react';
import theme from '~/theme';

type ButtonMode = 'normal' | 'normal_on_hover' | 'disabled';

export interface ButtonProps {
  mood?: ButtonMode;
  onClick?: () => any;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  mood = 'normal',
  onClick,
  children,
  type = 'button',
}: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const style = useStyles();
  const handleClick = (e) => {
    e.stopPropagation();
    if (mood === 'disabled') return null;
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{ ...style[mood], ...(hover ? style[mood + '_on_hover'] : {}) }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

const useStyles = (): { [key in ButtonMode]: React.CSSProperties } => ({
  normal: {
    width: 'max-content',
    color: theme.white_50,
    padding: '5px 20px',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.white_20}`,
    fontSize: 12,
  },
  normal_on_hover: {
    color: theme.white,
    backgroundColor: theme.white_05,
    transition: 'all 0.5s',
    border: `1px solid ${theme.white}`,
  },
  disabled: {
    width: 'max-content',
    color: theme.white_20,
    padding: '5px 20px',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.white_10}`,
    fontSize: 12,
  },
});
