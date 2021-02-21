import l10n from '../../lib/l10n';
import React from 'react';
import { atoms, atomize } from '../theme';

const fontSizes: { [key: string]: atoms } = {
  small: 'fs_s',
  medium: 'fs',
  large: 'fs_l',
  extraLarge: 'fs_xl',
};

interface TypographyProps {
  text: keyof typeof l10n;
  fontSize?: keyof typeof fontSizes;
  uppercase?: boolean;
}

export const Label = ({
  text,
  fontSize = 'medium',
  uppercase = false,
}: TypographyProps) => {
  return (
    <label
      className={atomize(
        'display_block',
        'color_white',
        'padding_bottom_l',
        fontSizes[fontSize],
        uppercase && 'textUppercase'
      )}
    >
      {l10n[text]}
    </label>
  );
};
