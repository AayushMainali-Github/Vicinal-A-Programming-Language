import { setVariable } from "../../utils/runtime/variables";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "output:string";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //set variable
  let variable: VariableData = {
    type: "string",
    value: `${new Date().getMilliseconds()}`,
  };
  setVariable(args[0].value, variable);

  //return
  return 1;
};
