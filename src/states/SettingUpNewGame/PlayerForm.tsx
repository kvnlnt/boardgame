import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '../../design/Typography';
import { Label } from '../../design/Forms/Label';
import { Box } from '../../design/Layout/Box';
import { localize } from '../../lib/l10n/localize';
import { Player, PlayerPieces } from '../../entities/Player';
import { Button } from '../../design/Buttons/Button';
import { Fieldset } from '../../design/Forms/Fieldset';
import { Legend } from '../../design/Forms/Legend';
import { atomize } from '../../design/theme';
import { Input } from '../../design/Forms/Input';
import { Select } from '../../design/Forms/Select';

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
          <Button text={localize('add')} type="submit" />
        </Fieldset>
      </Box>
    </form>
  );
};
