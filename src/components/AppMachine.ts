import { Player } from '../entities/Player';
import {
  assign,
  Machine,
  Event,
  EventData,
  SingleOrArray,
  State,
  MachineConfig,
} from 'xstate';

export interface AppContext {
  gameDice: number;
  gamePlayers: Player[];
  gameInProgress: boolean;
}

export type AppEvents =
  | { type: 'ADD_PLAYER'; name: string }
  | { type: 'GAME_SETUP'; screen: string }
  | { type: 'GAME_START'; screen: string }
  | { type: 'GAME_END'; screen: string }
  | { type: 'DICE_ROLL'; number: number };

export type AppSchema = {
  states: {
    gameSetup: {};
    gamePlay: {};
    gameEnd: {};
  };
};

export const AppMachineConfig: MachineConfig<
  AppContext,
  AppSchema,
  AppEvents
> = {
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
        GAME_START: {
          target: 'gamePlay',
        },
        ADD_PLAYER: {
          target: 'gameSetup',
          actions: assign({
            gamePlayers: (context, event) => [
              ...context.gamePlayers,
              new Player({ name: event.name, position: 1 }),
            ],
          }),
        },
      },
    },
    gamePlay: {
      on: {
        GAME_SETUP: {
          target: 'gameSetup',
        },
        GAME_END: 'gameEnd',
        DICE_ROLL: {
          target: 'gamePlay',
          actions: assign({
            gameDice: (_, event) => event.number,
          }),
        },
      },
    },
    gameEnd: {},
  },
};

export const AppMachine = Machine(AppMachineConfig);

export type UseHookStateType = State<AppContext, AppEvents, AppSchema>;

export type UseHookSendType = (
  event: SingleOrArray<Event<AppEvents>>,
  payload?: EventData
) => State<AppContext, AppEvents, AppSchema>;
