import l10n from '../../lib/l10n';
import React from 'react';
import { atoms, atomize } from '../theme';

interface TypographyProps {
  text: keyof typeof l10n;
}

export const Legend = ({ text }: TypographyProps) => {
  return (
    <legend
      className={atomize(
        'display_block',
        'color_white',
        'padding_bottom_xl',
        'fs_l'
      )}
    >
      {l10n[text]}
    </legend>
  );
};
