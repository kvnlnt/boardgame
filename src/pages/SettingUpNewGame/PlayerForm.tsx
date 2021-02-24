import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../../design/elements/Typography/Typography';
import { Label } from '../../design/elements/Forms/Label';
import { Box } from '../../design/elements/Layout/Box';
import { localize } from '../../domain/l10n/localize';
import { Player, PlayerPieces } from '../../domain/entities/Player';
import { Button } from '../../design/elements/Buttons/Button';
import { Fieldset } from '../../design/elements/Forms/Fieldset';
import { Legend } from '../../design/elements/Forms/Legend';
import { atomize } from '../../design/atoms';
import { Input } from '../../design/elements/Forms/Input';
import { Select } from '../../design/elements/Forms/Select';

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
      <Legend text="addPlayer" />
      <Box>
        <Fieldset>
          <Label text={'name'} />
          <Input
            name="name"
            placeholder="playerName"
            inputRef={register({
              required: true,
              validate: {
                dupCheck,
              },
            })}
          />
          {errors.name?.type === 'dupCheck' && (
            <div className={atomize('padding_y_l')}>
              <Typography text="nameIsTaken" condition="error" />
            </div>
          )}
          {errors.name?.type === 'required' && (
            <div className={atomize('padding_y_l')}>
              <Typography text="nameIsRequired" condition="error" />
            </div>
          )}
        </Fieldset>
        <Fieldset>
          <Label text={'piece'} />
          <Select
            name="piece"
            selectRef={register({
              required: true,
            })}
          >
            {pieces.map((piece) => (
              <option key={piece}>{piece}</option>
            ))}
          </Select>
        </Fieldset>
        <Fieldset>
          <Button text="add" type="submit" />
        </Fieldset>
      </Box>
    </form>
  );
};
