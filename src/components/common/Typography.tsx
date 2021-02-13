import l10n from '../../lib/l10n';
import React from 'react';
import theme from '~/theme';

type SizeTypes = 'normal' | 'small' | 'big' | 'huge';
type Moods = 'normal' | 'info' | 'warning' | 'error' | 'success';

interface TypographyProps {
  text: keyof typeof l10n;
  size?: SizeTypes;
  mood?: Moods;
}

export const Typography = ({
  text,
  size = 'normal',
  mood = 'normal',
}: TypographyProps) => {
  const moodType = useStyleType()[mood];
  const sizeType = useSizeType()[size];

  return <div style={{ ...moodType, ...sizeType }}>{l10n[text]}</div>;
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

const useStyleType = (): { [key in Moods]: React.CSSProperties } => ({
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
  success: {
    color: theme.green,
  },
});
