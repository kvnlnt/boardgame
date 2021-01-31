import { Player } from '../entities/Player';
import { assign, Machine } from 'xstate';

interface Schema {
  states: {
    gameSetup: {
      states: {
        configure: {};
        start: {};
      };
    };
    gamePlay: {
      states: {
        playerRollPrompt: {};
        playerRolling: {};
        playerMoving: {};
        playerActionPrompt: {};
        playerActionResult: {};
      };
    };
    gameEnd: {
      states: {
        result: {};
      };
    };
  };
}

type Events = { type: 'GAME_START' } | { type: 'DICE_ROLL'; number: number };

interface Context {
  gameDice: number;
  gamePlayers: Player[];
  gameInProgress: boolean;
}

export const AppMachine = Machine<Context, Schema, Events>({
  id: 'machine',
  initial: 'gameSetup',
  context: {
    gameDice: 1,
    gamePlayers: [
      new Player({ name: 'Kevin', active: true, position: 2 }),
      new Player({ name: 'Lincoln', position: 15 }),
    ],
    gameInProgress: false,
  },
  states: {
    gameSetup: {
      on: {
        DICE_ROLL: {
          target: 'gameSetup',
          actions: assign({
            gameDice: (_, event) => event.number,
          }),
        },
      },
    },
    gamePlay: {},
    gameEnd: {},
  },
});
