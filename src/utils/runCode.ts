import getSource from './parsing/getSource';
import extractFunctions from './parsing/extractFunctions';
import runFunctions from './runFunc/runFunctions';
export default async function (filepath: string) {
  const sourceCode: string = await getSource(filepath);
  let runf = await runFunctions(await extractFunctions(sourceCode));
  if (runf == 0) return 0;
}
