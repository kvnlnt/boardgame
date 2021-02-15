import l10n from '../../lib/l10n';
import React from 'react';
import theme from '~/theme';
import { makeStyles } from '~/lib/makeStyles';

type SizeTypes = 'normal' | 'small' | 'big' | 'huge';
type Moods = 'normal' | 'info' | 'warning' | 'error' | 'success';

interface TypographyProps {
  text: keyof typeof l10n;
  size?: SizeTypes;
  mood?: Moods;
  uppercase?: boolean;
}

export const Typography = ({
  text,
  size = 'normal',
  mood = 'normal',
  uppercase = false,
}: TypographyProps) => {
  return (
    <div
      style={styles([
        ['sizeNormal', size === 'normal'],
        ['sizeSmall', size === 'small'],
        ['sizeBig', size === 'big'],
        ['sizeHuge', size === 'huge'],
        ['colorNormal', mood === 'normal'],
        ['colorInfo', mood === 'info'],
        ['colorWarning', mood === 'warning'],
        ['colorError', mood === 'error'],
        ['colorSuccess', mood === 'success'],
        ['uppercase', uppercase],
      ])}
    >
      {l10n[text]}
    </div>
  );
};

const styles = makeStyles({
  sizeNormal: {
    fontSize: 16,
  },
  sizeSmall: {
    fontSize: 14,
  },
  sizeBig: {
    fontSize: 24,
  },
  sizeHuge: {
    fontSize: 32,
  },
  colorNormal: {
    color: theme.white,
  },
  colorInfo: {
    color: theme.black_80,
  },
  colorWarning: {
    color: theme.black_80,
  },
  colorError: {
    color: theme.red,
  },
  colorSuccess: {
    color: theme.green,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});
