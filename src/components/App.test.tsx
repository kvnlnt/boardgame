import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../components/App';

test('Smoke test', async () => {
  render(<App />);
  expect(1).toBe(1);
});

// import { createModel } from '@xstate/test';
// import { AppMachineConfig } from './AppMachine';
// import TestIds from '../lib/TestIds';
// import { render, fireEvent, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { App } from '../components/App';
// import { Machine } from 'xstate';

// // const loadingEntryAction = jest.fn();
// // const userSubmitAction = jest.fn();

// AppMachineConfig.states.gameSetup.meta = {
//   test: async ({ getByTestId }) => {
//     expect(getByTestId(TestIds.button_ready)).toHaveTextContent('Ready');
//   },
// };

// const stateMachineModel = createModel(Machine(AppMachineConfig));

// describe('StateMachine', () => {
//   const testPlans = stateMachineModel.getShortestPathPlans();
//   console.log(testPlans);

//   // testPlans.forEach((plan) => {
//   //   describe(plan.description, () => {
//   //     afterEach(cleanup);
//   //     plan.paths.forEach((path) => {
//   //       it(path.description, async () => {
//   //         await path.test(render(<TestComponent />));
//   //       });
//   //     });
//   //   });
//   // });
// });

// // const appModel = createModel(AppMachine).withEvents({
// //   GAME_SETUP: {
// //     exec: async (page) => {
// //       await page.click(`data-test-id=["${TestIds.button_settings}"]`);
// //     },
// //   },
// // });

// // describe('toggle', () => {
// //   const testPlans = appModel.getShortestPathPlans();

// //   // testPlans.forEach((plan) => {
// //   //   describe(plan.description, () => {
// //   //     plan.paths.forEach((path) => {
// //   //       it(path.description, async () => {
// //   //         // do any setup, then...

// //   //         await path.test(page);
// //   //       });
// //   //     });
// //   //   });
// //   // });

// //   it('should have full coverage', () => {
// //     return appModel.testCoverage();
// //   });
// // });
