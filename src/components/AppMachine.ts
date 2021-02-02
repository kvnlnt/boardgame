import { Player } from "../entities/Player";
import {
  assign,
  createMachine,
  Event,
  EventData,
  SingleOrArray,
  State,
} from "xstate";

export interface AppContext {
  gameDice: number;
  gamePlayers: Player[];
  gameInProgress: boolean;
  screen: "gameSetup" | "gamePlay" | "gameEnd";
}

export type AppEvents =
  | { type: "GAME_START"; screen: string }
  | { type: "GAME_SETUP"; screen: string }
  | { type: "DICE_ROLL"; number: number };

export type AppState =
  | { value: "gameSetup"; context: AppContext }
  | { value: "gamePlay"; context: AppContext }
  | { value: "gameEnd"; context: AppContext };

export const AppMachine = createMachine<AppContext, AppEvents, AppState>({
  id: "machine",
  initial: "gamePlay",
  context: {
    gameDice: 1,
    gamePlayers: [
      new Player({ name: "Kevin", active: true, position: 2 }),
      new Player({ name: "Lincoln", position: 15 }),
    ],
    gameInProgress: false,
    screen: "gamePlay",
  },
  states: {
    gameSetup: {
      on: {
        GAME_START: {
          target: "gamePlay",
          actions: assign({ screen: (_) => "gamePlay" }),
        },
      },
    },
    gamePlay: {
      on: {
        GAME_SETUP: {
          target: "gameSetup",
          actions: assign({ screen: (_) => "gameSetup" }),
        },
        DICE_ROLL: {
          target: "gameSetup",
          actions: assign({
            gameDice: (_, event) => event.number,
          }),
        },
      },
    },
    gameEnd: {},
  },
});

export type UseHookStateType = State<AppContext, AppEvents, any, AppState>;

export type UseHookSendType = (
  event: SingleOrArray<Event<AppEvents>>,
  payload?: EventData
) => State<AppContext, AppEvents, any, AppState>;
