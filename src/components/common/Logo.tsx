import React from 'react';
import theme from '~/theme';

export const Logo = () => {
  const style = useStyles();
  return <h1 style={style.logo}>Boardgame</h1>;
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  logo: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    wordBreak: 'break-all',
    textAlign: 'center',
    letterSpacing: 3,
    color: theme.white,
  },
});
