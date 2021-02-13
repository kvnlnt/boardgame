import { Player } from '../entities/Player';
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
  gameDice: number;
  gamePlayers: Player[];
  gameInProgress: boolean;
}

export enum Transition {
  ADD_PLAYER = 'ADD_PLAYER',
  CHANGE_PLAYER_ORDER = 'CHANGE_PLAYER_ORDER',
  DICE_ROLL = 'DICE_ROLL',
  GAME_END = 'GAME_END',
  GAME_READY = 'GAME_READY',
  GAME_SETUP = 'GAME_SETUP',
  GAME_START = 'GAME_START',
  REMOVE_PLAYER = 'REMOVE_PLAYER',
  SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER',
}

enum Action {
  addPlayer = 'addPlayer',
  changePlayerOrder = 'changePlayerOrder',
  removePlayer = 'removePlayer',
  rollDice = 'rollDice',
  setActivePlayer = 'setActivePlayer',
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
type TransitionDiceRoll = { type: Transition.DICE_ROLL; number: number };
type TransitionGameSetup = { type: Transition.GAME_SETUP; screen: string };
type TransitionGameReady = { type: Transition.GAME_READY; screen: string };
type TransitionGameStart = { type: Transition.GAME_START; screen: string };
type TransitionGameEnd = { type: Transition.GAME_END; screen: string };
type TransitionSetActivePlayer = {
  type: Transition.SET_ACTIVE_PLAYER;
  player: Player;
};

type AppTransitions =
  | TransitionAddPlayer
  | TransitionChangePlayer
  | TransitionDiceRoll
  | TransitionGameReady
  | TransitionGameSetup
  | TransitionGameStart
  | TransitionGameEnd
  | TransitionRemovePlayer
  | TransitionSetActivePlayer;

type AppSchema = {
  states: {
    gameSetup: {};
    gameReady: {};
    gamePlay: {};
    gameEnd: {};
  };
};

const fakeGame: Player[] = [
  { name: 'Kevin', position: 1, piece: '♔', active: true },
  { name: 'Lincoln', position: 1, piece: '♕', active: false },
  { name: 'Jaymie', position: 1, piece: '♖', active: false },
  { name: 'Sydnie', position: 1, piece: '♗', active: false },
  { name: 'Luther', position: 1, piece: '♘', active: false },
  { name: 'James', position: 1, piece: '♙', active: false },
];

export const AppMachineConfig: MachineConfig<
  AppContext,
  AppSchema,
  AppTransitions
> = {
  id: 'machine',
  initial: 'gameSetup',
  context: {
    gameDice: 1,
    gamePlayers: fakeGame,
    gameInProgress: false,
  },
  states: {
    gameReady: {
      on: {
        GAME_SETUP: {
          target: 'gameSetup',
        },
        GAME_START: {
          target: 'gamePlay',
        },
      },
    },
    gameSetup: {
      on: {
        ADD_PLAYER: {
          target: 'gameSetup',
          actions: [Action.addPlayer],
        },
        CHANGE_PLAYER_ORDER: {
          target: 'gameSetup',
          actions: [Action.changePlayerOrder],
        },
        GAME_READY: {
          target: 'gameReady',
        },
        GAME_START: {
          target: 'gamePlay',
        },
        REMOVE_PLAYER: {
          target: 'gameSetup',
          actions: [Action.removePlayer],
        },
        SET_ACTIVE_PLAYER: {
          target: 'gameSetup',
          actions: [Action.setActivePlayer],
        },
      },
    },
    gamePlay: {
      on: {
        DICE_ROLL: {
          target: 'gamePlay',
          actions: [Action.rollDice],
        },
        GAME_SETUP: {
          target: 'gameSetup',
        },
        GAME_END: 'gameEnd',
      },
    },
    gameEnd: {},
  },
};

export const AppMachineOptions: Partial<MachineOptions<AppContext, any>> = {
  services: {},
  actions: {
    [Action.addPlayer]: assign<AppContext, TransitionAddPlayer>({
      gamePlayers: (context, event) => [
        ...context.gamePlayers,
        new Player({
          name: event.name,
          position: 1,
          piece: event.piece,
          active: false,
        }),
      ],
    }),
    [Action.changePlayerOrder]: assign<AppContext, TransitionChangePlayer>({
      gamePlayers: (context, event) => {
        const list = [...context.gamePlayers];
        const idx = context.gamePlayers.findIndex(
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
    [Action.removePlayer]: assign<AppContext, TransitionRemovePlayer>({
      gamePlayers: (context, event) =>
        context.gamePlayers.filter((player) => {
          return player.name !== event.name;
        }),
    }),
    [Action.rollDice]: assign<AppContext, TransitionDiceRoll>({
      gameDice: (_, event) => event.number,
    }),
    [Action.setActivePlayer]: assign<AppContext, TransitionSetActivePlayer>({
      gamePlayers: (context, event) =>
        context.gamePlayers.map((player) => ({
          ...player,
          active: player.name === event.player.name ? true : false,
        })),
    }),
  },
  guards: {},
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
