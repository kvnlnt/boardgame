import l10n from '../../lib/l10n';
import React from 'react';
import theme from '~/theme';

type SizeTypes = 'normal' | 'small' | 'big' | 'huge';
type StyleTypes = 'normal' | 'info' | 'warning' | 'error';

interface TypographyProps {
  text: keyof typeof l10n;
  size?: SizeTypes;
  style?: StyleTypes;
}

export const Typography = ({
  text,
  size = 'normal',
  style = 'normal',
}: TypographyProps) => {
  const styleType = useStyleType()[style];
  const sizeType = useSizeType()[size];

  return <div style={{ ...styleType, ...sizeType }}>{l10n[text]}</div>;
};

const useSizeType = (): {
  [key in SizeTypes]: React.CSSProperties;
} => ({
  normal: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  big: {
    fontSize: 24,
  },
  huge: {
    fontSize: 32,
  },
});

const useStyleType = (): { [key in StyleTypes]: React.CSSProperties } => ({
  normal: {
    color: theme.white,
  },
  info: {
    color: theme.black_80,
  },
  warning: {
    color: theme.black_80,
  },
  error: {
    color: theme.red,
  },
});
