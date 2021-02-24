import React from 'react';
import { atomize } from '~/design/atoms';
import { Player } from '~/domain/entities/Player';
import { ButtonProps } from '../../design/elements/Buttons/Button';
import { ButtonList } from '../../design/elements/Buttons/List';

interface PlayerCardOpts {
  player: Player;
  onRemove: (player: Player) => void;
  moveUp?: (player: Player) => void;
  moveDown?: (player: Player) => void;
  onClick?: () => void;
}

export const PlayerCard = ({
  player,
  onRemove,
  moveUp,
  moveDown,
  onClick,
}: PlayerCardOpts) => {
  const buttons: ButtonProps[] = [];
  buttons.push({
    disabled: moveUp === null,
    onClick: () => moveUp(player),
    text: 'up',
  });
  buttons.push({
    disabled: moveDown === null,
    onClick: () => moveDown(player),
    text: 'down',
  });
  buttons.push({
    disabled: player.active,
    onClick: () => onRemove(player),
    text: 'delete',
  });
  return (
    <div
      className={atomize(
        'display_flex',
        'flex_direction_row',
        'justify_content_space_between',
        'align_items_center',
        'border_width_1',
        'border_style_solid',
        'border_color_white_05',
        'padding_xl',
        'cursor_pointer',
        'bg_color_white_03_on_hover',
        player.active && 'bg_color_white_05'
      )}
      onClick={onClick}
    >
      <div
        className={atomize(
          'display_flex',
          'flex_direction_row',
          'align_items_center'
        )}
      >
        <div className={atomize('fs_xl', 'color_white')}>{player.piece}</div>
        <div className={atomize('fs_xl', 'color_white', 'margin_left_xl')}>
          {player.name}
        </div>
      </div>
      <ButtonList buttons={buttons} />
    </div>
  );
};
