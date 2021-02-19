import l10n from '../lib/l10n';
import React from 'react';
import { atoms, atomize } from './theme';

const fontSizes: { [key: string]: atoms } = {
  small: 'fs_s',
  medium: 'fs_m',
  large: 'fs_l',
  extraLarge: 'fs_xl',
};

const conditions: { [key: string]: atoms } = {
  normal: 'color_white',
  info: 'color_info',
  warning: 'color_warning',
  error: 'color_error',
  success: 'color_success',
};

interface TypographyProps {
  text: keyof typeof l10n;
  fontSize?: keyof typeof fontSizes;
  condition?: keyof typeof conditions;
  uppercase?: boolean;
}

export const Typography = ({
  text,
  fontSize = 'medium',
  condition = 'normal',
  uppercase = false,
}: TypographyProps) => {
  return (
    <div
      className={atomize(
        fontSizes[fontSize],
        conditions[condition],
        uppercase && 'textUppercase'
      )}
    >
      {l10n[text]}
    </div>
  );
};
