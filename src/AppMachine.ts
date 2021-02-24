import { Player } from './domain/entities/Player';
import {
  assign,
  Machine,
  Event,
  EventData,
  SingleOrArray,
  State,
  MachineConfig,
  MachineOptions,
} from 'xstate';

interface AppContext {
  dice: number;
  players: Player[];
  gameInProgress: boolean;
}

export enum Transition {
  ADD_PLAYER = 'ADD_PLAYER',
  CHANGE_PLAYER_ORDER = 'CHANGE_PLAYER_ORDER',
  ROLL_DICE = 'ROLL_DICE',
  END_GAME = 'END_GAME',
  SETUP_GAME = 'SETUP_GAME',
  START_GAME = 'START_GAME',
  REMOVE_PLAYER = 'REMOVE_PLAYER',
  SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER',
}

type TransitionRemovePlayer = { type: Transition.REMOVE_PLAYER; name: string };
type TransitionAddPlayer = {
  type: Transition.ADD_PLAYER;
  name: string;
  piece: string;
  position: number;
  active: boolean;
};
type TransitionChangePlayer = {
  type: Transition.CHANGE_PLAYER_ORDER;
  player: Player;
  dir: 'up' | 'down';
};
type TransitionDiceRoll = { type: Transition.ROLL_DICE; number: number };
type TransitionSetup = { type: Transition.SETUP_GAME; screen: string };
type TransitionGameStart = { type: Transition.START_GAME; screen: string };
type TransitionGameEnd = { type: Transition.END_GAME; screen: string };
type TransitionSetActivePlayer = {
  type: Transition.SET_ACTIVE_PLAYER;
  player: Player;
};

type AppTransitions =
  | TransitionAddPlayer
  | TransitionChangePlayer
  | TransitionDiceRoll
  | TransitionSetup
  | TransitionGameStart
  | TransitionGameEnd
  | TransitionRemovePlayer
  | TransitionSetActivePlayer;

type AppSchema = {
  states: {
    settingUpNewGame: {};
    playingTheGame: {};
    gameOver: {};
  };
};

export const AppMachineConfig: MachineConfig<
  AppContext,
  AppSchema,
  AppTransitions
> = {
  id: 'machine',
  initial: 'settingUpNewGame',
  context: {
    dice: 1,
    players: [
      { name: 'Kevin', position: 1, piece: '♔', active: true },
      { name: 'Lincoln', position: 1, piece: '♕', active: false },
      { name: 'Jaymie', position: 1, piece: '♖', active: false },
      { name: 'Sydnie', position: 1, piece: '♗', active: false },
      { name: 'Luther', position: 1, piece: '♘', active: false },
      { name: 'James', position: 1, piece: '♘', active: false },
    ],
    gameInProgress: false,
  },
  states: {
    settingUpNewGame: {
      on: {
        ADD_PLAYER: {
          actions: ['addPlayer'],
        },
        CHANGE_PLAYER_ORDER: {
          actions: 'changePlayerOrder',
        },
        START_GAME: {
          target: 'playingTheGame',
        },
        REMOVE_PLAYER: {
          actions: 'removePlayer',
        },
        SET_ACTIVE_PLAYER: {
          actions: 'setActivePlayer',
        },
      },
    },
    playingTheGame: {
      on: {
        ROLL_DICE: {
          actions: 'rollDice',
        },
        SETUP_GAME: {
          target: 'settingUpNewGame',
        },
        END_GAME: 'gameOver',
      },
    },
    gameOver: {},
  },
};

export const AppMachineOptions: Partial<MachineOptions<AppContext, any>> = {
  services: {},
  actions: {
    addPlayer: assign<AppContext, TransitionAddPlayer>({
      players: (context, event) => [
        ...context.players,
        new Player({
          name: event.name,
          position: 1,
          piece: event.piece,
          active: false,
        }),
      ],
    }),
    changePlayerOrder: assign<AppContext, TransitionChangePlayer>({
      players: (context, event) => {
        const list = [...context.players];
        const idx = context.players.findIndex(
          (player) => player.name === event.player.name
        );
        const x = idx;
        const y = event.dir === 'down' ? idx + 1 : idx - 1;
        const z = list[y];
        list[y] = list[x];
        list[x] = z;
        return list;
      },
    }),
    removePlayer: assign<AppContext, TransitionRemovePlayer>({
      players: (context, event) =>
        context.players.filter((player) => {
          return player.name !== event.name;
        }),
    }),
    rollDice: assign<AppContext, TransitionDiceRoll>({
      dice: (_, event) => event.number,
    }),
    setActivePlayer: assign<AppContext, TransitionSetActivePlayer>({
      players: (context, event) =>
        context.players.map((player) => ({
          ...player,
          active: player.name === event.player.name ? true : false,
        })),
    }),
  },
  guards: {
    maxPlayersReached: (context: AppContext) => context.players.length >= 6,
    maxPlayersNotReached: (context: AppContext) => context.players.length < 6,
  },
};

export const AppMachine = Machine<AppContext, AppSchema, AppTransitions>(
  AppMachineConfig,
  AppMachineOptions
);

export type UseHookStateType = State<AppContext, AppTransitions, AppSchema>;

export type UseHookSendType = (
  event: SingleOrArray<Event<AppTransitions>>,
  payload?: EventData
) => State<AppContext, AppTransitions, AppSchema>;
