import React from 'react';

interface BoxProps {
  justify?: 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'start' | 'end';
  children: React.ReactNode;
}

export const Box = ({
  justify = 'center',
  align = 'center',
  children,
}: BoxProps) => (
  <div style={{ justifyContent: justify, alignItems: align }}>{children}</div>
);
