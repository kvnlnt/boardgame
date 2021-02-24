import React from 'react';
import l10n from '../../../domain/l10n';
import { FieldElement, FieldValues } from 'react-hook-form';
import { atomize } from '../../atoms';

interface SelectProps {
  name: string;
  selectRef: (ref: FieldElement<FieldValues>) => void;
}

export const Select: React.FC<SelectProps> = ({
  name,
  selectRef,
  children,
}) => (
  <select
    className={atomize(
      'bg_color_white_05',
      'padding_l',
      'color_white',
      'border_0',
      'display_block',
      'width_100',
      'appearance_none'
    )}
    name={name}
    ref={selectRef}
  >
    {children}
  </select>
);
