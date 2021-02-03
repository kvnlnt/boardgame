import { Player } from '../entities/Player';
import {
  assign,
  createMachine,
  Event,
  EventData,
  SingleOrArray,
  State,
  MachineConfig,
} from 'xstate';
import TestIds from '../lib/TestIds';

export interface AppContext {
  gameDice: number;
  gamePlayers: Player[];
  gameInProgress: boolean;
}

export type AppEvents =
  | { type: 'GAME_START'; screen: string }
  | { type: 'GAME_SETUP'; screen: string }
  | { type: 'DICE_ROLL'; number: number };

export type AppSchema =
  | { value: 'gameSetup'; context: AppContext }
  | { value: 'gamePlay'; context: AppContext }
  | { value: 'gameEnd'; context: AppContext };

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
      },
      meta: {
        test: async (page) => {
          await page.waitFor(`data-test-id=["${TestIds.button_ready}"]`);
        },
      },
    },
    gamePlay: {
      on: {
        GAME_SETUP: {
          target: 'gameSetup',
        },
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

export const AppMachine = createMachine(AppMachineConfig);

export type UseHookStateType = State<AppContext, AppEvents, any, AppSchema>;

export type UseHookSendType = (
  event: SingleOrArray<Event<AppEvents>>,
  payload?: EventData
) => State<AppContext, AppEvents, any, AppSchema>;
