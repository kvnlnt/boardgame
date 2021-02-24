import React from 'react';
import theme from '~/design/atoms';

interface CardProps {
  name: string;
  children: React.ReactNode;
}

export const Card = ({ name, children }: CardProps) => {
  const style = useStyles();
  return (
    <div style={style.card}>
      <div style={style.title}>{name}</div>
      <div style={style.body}>{children}</div>
    </div>
  );
};

const useStyles = (): { [key: string]: React.CSSProperties } => ({
  // 'cards--in-columns': {
  //   display: 'grid',
  //   gridGap: 10,
  //   gridAutoFlow: 'column',
  //   gridAutoColumns: '1fr',
  //   color: theme.white,
  //   margin: 10,
  // },

  // 'cards--in-rows': {
  //   display: 'grid',
  //   grid-gap: 10,
  //   grid-auto-flow: 'row',
  //   grid-auto-rows: '1fr',
  //   color: theme.white,
  //   margin: 10,
  // },
  card: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.white,
    border: '1px dashed ' + theme.white_10,
    height: '100%',
    flex: 1,
  },
  active: {
    border: '5px solid ' + theme.white_60,
  },
  title: {
    color: theme.white_30,
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    backgroundColor: theme.white_05,
    padding: 5,
    margin: 3,
  },
  body: {
    display: 'flex',
    color: theme.white_60,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
