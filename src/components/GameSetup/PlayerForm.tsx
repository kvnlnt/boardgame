import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../common/Typography';
import { Box } from '../common/Box';
import { Text } from '../common/Text';
import { Player } from '~/entities/Player';
import { Button } from '../common/Button';

interface PlayerFormOptions {
  players: Player[];
  onSubmit: (data: Player) => void;
}

export const PlayerForm = ({ players, onSubmit }: PlayerFormOptions) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onFormSubmission = (data) => {
    onSubmit({
      name: data.name,
      position: 1,
      piece: data.piece,
      active: false,
    });
    reset();
  };
  const dupCheck = (name) => !players.find((player) => player.name === name);
  const pieces = ['♔', '♕', '♖', '♗', '♘', '♙'];
  const usedPieces = players.map((player) => player.piece);
  const availablePieces = pieces.filter((piece) => !usedPieces.includes(piece));

  if (availablePieces.length === 0)
    return (
      <div style={{ margin: 20 }}>
        <Typography text="maxPlayersConfigured" />
      </div>
    );

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
          <label>{Text('piece')}</label>
          <select
            name="piece"
            ref={register({
              required: true,
            })}
          >
            {availablePieces.map((piece) => (
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
