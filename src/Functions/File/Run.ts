import runCode from "../../utils/runCode";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = async function (func: FunctionObject) {
  //compute args
  let argsType: string = "input:string";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //run file
  let run = await runCode(args[0].value);
  if (run == 0) return null;

  //return
  return 1;
};
