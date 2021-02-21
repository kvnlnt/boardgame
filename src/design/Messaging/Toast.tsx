import React, { useState } from 'react';
import { atomize, atoms } from '../theme';
import l10n from '../../lib/l10n';
import { localize } from '~/lib/l10n/localize';

type conditions = 'normal' | 'info' | 'warning' | 'error' | 'success';

const colors: Record<conditions, atoms> = {
  normal: 'color_white',
  info: 'color_info',
  warning: 'color_warning',
  error: 'color_error',
  success: 'color_success',
};

const bgColors: Record<conditions, atoms> = {
  normal: 'bg_color_black_80',
  info: 'bg_color_info',
  warning: 'bg_color_warning',
  error: 'bg_color_error',
  success: 'bg_color_success',
};

interface ToastItemProps {
  message: keyof typeof l10n;
  condition?: conditions;
}

interface ToastProps {
  toasts: ToastItemProps[];
}

export const Toast = ({ toasts }: ToastProps) => {
  const [toastsToShow, setToastsToShow] = useState<ToastItemProps[]>(toasts);
  const handleDismissal = (message: string) =>
    setToastsToShow(toastsToShow.filter((t) => t.message !== message));
  if (toastsToShow.length === 0) return null;
  return (
    <div
      className={atomize('position_fixed', 'margin_xl')}
      style={{ right: 0 }}
    >
      {toastsToShow.map(({ message, condition = 'normal' }, idx) => (
        <div
          key={idx}
          className={atomize(
            bgColors[condition],
            'margin_bottom_l',
            'display_flex',
            'align_items_center',
            'justify_content_space_between'
          )}
        >
          <div className={atomize('padding_xl', colors[condition])}>
            {localize(message)}
          </div>
          <div
            className={atomize(
              'margin_left_2xl',
              'cursor_pointer',
              'padding_y_l',
              'padding_x_xl',
              'color_white_50',
              'color_white_on_hover'
            )}
            onClick={() => handleDismissal(message)}
          >
            X
          </div>
        </div>
      ))}
    </div>
  );
};
