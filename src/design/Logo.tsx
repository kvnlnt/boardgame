import React from 'react';
import { atomize } from '~/design/theme';

export const Logo = () => {
  return (
    <div
      className={atomize('fs_2xl', 'textUppercase', 'color_white', 'padding_l')}
    >
      Boardgame
    </div>
  );
};
