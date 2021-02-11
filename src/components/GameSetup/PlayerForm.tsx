import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../common/Typography';
import { Box } from '../common/Box';
import { Text } from '../common/Text';
import { UseHookSendType, UseHookStateType } from '../AppMachine';
import { Player } from '~/entities/Player';

interface PlayerFormOptions {
  players: Player[];
  onSubmit: (data: Player) => void;
}

export const PlayerForm = ({ players, onSubmit }: PlayerFormOptions) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onFormSubmission = (data) => {
    onSubmit(data);
    reset();
  };
  const dupCheck = (name) => !players.find((player) => player.name === name);

  return (
    <form onSubmit={handleSubmit(onFormSubmission)}>
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
