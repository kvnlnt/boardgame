import React from 'react';
import { createModel } from '@xstate/test';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../App';
import { AppMachineConfig } from '../machines/AppMachine';
import { Machine } from 'xstate';

const machine = Machine(AppMachineConfig);
const model = createModel(machine).withEvents({
  SETUP_GAME: {
    exec: () => {
      expect(1).toBe(1);
    },
  },
  START_GAME: {
    exec: () => {
      expect(1).toBe(1);
    },
  },
  END_GAME: {
    exec: () => {
      expect(1).toBe(1);
    },
  },
  ROLL_DICE: {
    exec: () => {
      expect(1).toBe(1);
    },
  },
});

machine.states.gameSetup.meta = {
  test: async () => {
    expect(1).toBe(1);
  },
};

machine.states.gamePlay.meta = {
  test: async () => {
    expect(1).toBe(1);
  },
};

machine.states.gameEnd.meta = {
  test: async () => {
    expect(1).toBe(1);
  },
};

describe('StateMachine', () => {
  const testPlans = model.getShortestPathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      afterEach(cleanup);
      plan.paths.forEach((path) => {
        it(path.description, async () => {
          await path.test(render(<App />));
        });
      });
    });
  });
});

describe('coverage', () => {
  it('should pass', () => {
    model.testCoverage();
  });
});
