import React from 'react';
import l10n from '../../../domain/l10n';
import { FieldElement, FieldValues } from 'react-hook-form';
import { atomize } from '../../atoms';

interface InputProps {
  name: string;
  placeholder: keyof typeof l10n;
  inputRef: (ref: FieldElement<FieldValues>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  inputRef,
  placeholder = '',
  children,
}) => (
  <input
    className={atomize(
      'bg_color_white_05',
      'padding_l',
      'color_white',
      'border_0'
    )}
    placeholder={l10n[placeholder]}
    name={name}
    ref={inputRef}
  >
    {children}
  </input>
);
