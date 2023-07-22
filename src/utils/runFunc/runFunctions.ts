import { FunctionObject } from '../../types/Function';

export default async function runFunctions(funcArray: Array<FunctionObject> | null) {
  if (funcArray == null) return 0;
  for (let i = 0; i < funcArray.length; i++) {
    let func = funcArray[i];
    let runFunc = await require(`../../Functions/${func.object}/${func.function}`)(func);
    if (runFunc == null) return 0;
  }
}
