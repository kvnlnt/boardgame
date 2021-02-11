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
  | { type: 'REMOVE_PLAYER'; name: string }
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

const startingPlayers = [
  new Player({
    name: 'Kevin',
    position: 1,
    active: true,
    piece: '♔',
  }),
  new Player({ name: 'Lincoln', position: 1, piece: '♕' }),
  new Player({ name: 'Jaymie', position: 1, piece: '♖' }),
  new Player({ name: 'Sydnie', position: 1, piece: '♗' }),
  new Player({ name: 'Luther', position: 1, piece: '♘' }),
  new Player({ name: 'James', position: 1, piece: '♙' }),
];

export const AppMachineConfig: MachineConfig<
  AppContext,
  AppSchema,
  AppEvents
> = {
  id: 'machine',
  initial: 'gamePlay',
  context: {
    gameDice: 1,
    gamePlayers: startingPlayers,
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
        REMOVE_PLAYER: {
          target: 'gameSetup',
          actions: assign({
            gamePlayers: (context, event) =>
              context.gamePlayers.filter(
                (player) => player.name !== event.name
              ),
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
