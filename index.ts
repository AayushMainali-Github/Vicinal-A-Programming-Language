import runCode from './src/utils/runCode';
(async () => {
  const startTime: number = new Date().getTime();
  await runCode('main');
  console.log(`It took ${(new Date().getTime() - startTime) / 1000} seconds to run the program.`);
})();
