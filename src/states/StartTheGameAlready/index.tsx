import React from 'react';
import {
  UseHookSendType,
  UseHookStateType,
  Transition,
} from '../../AppMachine';
import { Logo } from '../../design/Logo';
import { Typography } from '../../design/Typography';
import { localize } from '../../lib/l10n/localize';
import { atomize } from '~/design/theme';
import { ButtonList } from '~/design/Buttons/List';

interface ReadyOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const StartTheGameAlready = ({ send }: ReadyOptions) => {
  const onStart = () => send(Transition.START_GAME);
  const onSetup = () => send(Transition.SETUP_GAME);
  return (
    <div
      style={style.screen}
      className={atomize('bg_color_black_80', 'height_100')}
    >
      <div style={style.header}>
        <Logo />
      </div>
      <div
        className={atomize(
          'display_flex',
          'align_items_center',
          'flex_direction_column'
        )}
        style={style.content}
      >
        <div className={atomize('padding_2xl')}>
          <Typography text="youAreReady" />
        </div>
        <ButtonList
          buttons={[
            {
              text: localize('startGame'),
              onClick: onStart,
            },
            {
              text: localize('setup'),
              onClick: onSetup,
            },
          ]}
        />
      </div>
    </div>
  );
};

const style: { [key: string]: React.CSSProperties } = {
  screen: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content auto',
    gridTemplateAreas: `'header' 'content'`,
    width: '100vw',
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    gridArea: 'content',
  },
};
