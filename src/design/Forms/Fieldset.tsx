import React from 'react';
import { atomize } from '../theme';

export const Fieldset = ({ children }) => (
  <fieldset
    className={atomize(
      'border_0',
      'padding_bottom_xl',
      'padding_x_0',
      'margin_0'
    )}
  >
    {children}
  </fieldset>
);
