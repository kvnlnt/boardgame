// import { createModel } from '@xstate/test';
// import { AppMachine } from './AppMachine';
// import TestIds from '../lib/TestIds';

// const appModel = createModel(AppMachine).withEvents({
//   GAME_SETUP: {
//     exec: async (page) => {
//       await page.click(`data-test-id=["${TestIds.button_settings}"]`);
//     },
//   },
// });

// describe('toggle', () => {
//   const testPlans = appModel.getShortestPathPlans();

//   // testPlans.forEach((plan) => {
//   //   describe(plan.description, () => {
//   //     plan.paths.forEach((path) => {
//   //       it(path.description, async () => {
//   //         // do any setup, then...

//   //         await path.test(page);
//   //       });
//   //     });
//   //   });
//   // });

//   it('should have full coverage', () => {
//     return appModel.testCoverage();
//   });
// });
