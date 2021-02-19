import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../../design/Typography';
import { Box } from '../../design/Layout/Box';
import { localize } from '../../lib/l10n/localize';
import { Player, PlayerPieces } from '../../entities/Player';
import { Button } from '../../design/Buttons/Button';

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
      <Typography localize="addPlayer" size="big" />
      <Box>
        <fieldset>
          <label>{localize('name')}</label>
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
              <Typography localize="nameIsTaken" style="error" />
            </div>
          )}
          {errors.name?.type === 'required' && (
            <div style={{ padding: 10 }}>
              <Typography localize="nameIsRequired" style="error" />
            </div>
          )}
        </fieldset>
        <fieldset>
          <label>{localize('piece')}</label>
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
          <Button type="submit">{localize('add')} </Button>
        </fieldset>
      </Box>
    </form>
  );
};
