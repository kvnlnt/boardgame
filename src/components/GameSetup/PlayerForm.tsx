import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../common/Typography';
import { Box } from '../common/Box';
import { Text } from '../common/Text';
import { UseHookSendType, UseHookStateType } from '../AppMachine';

interface PlayerFormOptions {
  state: UseHookStateType;
  send: UseHookSendType;
}

export const PlayerForm = ({ state, send }: PlayerFormOptions) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    send('ADD_PLAYER', data);
    reset();
  };
  const dupCheck = (name) =>
    !state.context.gamePlayers.find((player) => player.name === name);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <fieldset>
          <label>{Text('name')}</label>
          <input
            name="name"
            ref={register({
              required: true,
              validate: {
                dupCheck,
              },
            })}
          />
          {errors.name?.type === 'dupCheck' && (
            <div style={{ padding: 10 }}>
              <Typography text="nameIsTaken" style="error" />
            </div>
          )}
          {errors.name?.type === 'required' && (
            <div style={{ padding: 10 }}>
              <Typography text="nameIsRequired" style="error" />
            </div>
          )}
        </fieldset>
        <fieldset>
          <input type="submit" value={Text('add')} />
        </fieldset>
      </Box>
    </form>
  );
};
