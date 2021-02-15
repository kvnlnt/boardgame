import React, { useState } from 'react';
import theme from '~/theme';
import { makeStyles } from '../../lib/makeStyles';

type ButtonMode = 'normal' | 'normal_on_hover';

export interface ButtonProps {
  mood?: ButtonMode;
  onClick?: () => any;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  mood = 'normal',
  onClick,
  children,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={styles([
        ['normal', mood === 'normal'],
        ['normal_on_hover', hover, mood === 'normal'],
        ['disabled', disabled],
      ])}
      onClick={handleClick}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

const styles = makeStyles({
  normal: {
    width: 'max-content',
    color: theme.white_50,
    padding: '5px 20px',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.white_20}`,
    fontSize: 12,
    cursor: 'pointer',
  },
  normal_on_hover: {
    color: theme.white,
    backgroundColor: theme.white_05,
    transition: 'all 0.5s',
    border: `1px solid ${theme.white}`,
    cursor: 'pointer',
  },
  disabled: {
    width: 'max-content',
    color: theme.white_20,
    padding: '5px 20px',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.white_10}`,
    fontSize: 12,
    cursor: 'pointer',
  },
});
