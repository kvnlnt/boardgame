import React from 'react';
import { Button, ButtonProps } from '../common/Buttons/Button';

interface ButtonListProps {
  buttons: ButtonProps[];
}

export const ButtonList = ({ buttons }: ButtonListProps) => {
  return (
    <>
      {buttons.map((props, idx) => (
        <div key={idx} style={{ margin: 5 }}>
          <Button {...props} />
        </div>
      ))}
    </>
  );
};
