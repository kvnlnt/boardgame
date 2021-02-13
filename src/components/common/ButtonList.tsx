import React from 'react';
import { Button, ButtonProps } from './Button';

interface ButtonListProps {
  buttons: ButtonProps[];
}

export const ButtonList = ({ buttons }: ButtonListProps) => {
  const style = useStyles();
  return (
    <>
      {buttons.map((props) => (
        <div style={style.wrapper}>
          <Button {...props} />
        </div>
      ))}
    </>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  wrapper: {
    margin: 5,
  },
});
