import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../common/Typography';
import { Box } from '../common/Box';
import { Text } from '../common/Text';
import { Player, PlayerPieces } from '~/entities/Player';
import { Button } from '../common/Button';

interface PlayerFormOptions {
  players: Player[];
  onSubmit: (data: Player) => void;
  pieces: string[];
}

export const PlayerForm = ({
  players,
  onSubmit,
  pieces,
}: PlayerFormOptions) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const dupCheck = (name) => !players.find((player) => player.name === name);
  const onFormSubmission = (data) => {
    onSubmit({
      name: data.name,
      position: 1,
      piece: data.piece,
      active: false,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmission)}>
      <Typography text="addPlayer" size="big" />
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
          <label>{Text('piece')}</label>
          <select
            name="piece"
            ref={register({
              required: true,
            })}
          >
            {pieces.map((piece) => (
              <option key={piece}>{piece}</option>
            ))}
          </select>
        </fieldset>
        <fieldset style={{ marginTop: 20 }}>
          <Button type="submit">{Text('add')} </Button>
        </fieldset>
      </Box>
    </form>
  );
};
