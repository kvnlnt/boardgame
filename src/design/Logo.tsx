import React from 'react';
import theme from '~/design/theme';

export const Logo = () => {
  return (
    <h1
      style={{
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'normal',
        wordBreak: 'break-all',
        textAlign: 'center',
        letterSpacing: 3,
        color: theme.white,
      }}
    >
      Boardgame
    </h1>
  );
};
