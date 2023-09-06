import { setVariable } from "../../utils/runtime/variables";
import { FunctionObject, Args } from "../../types/Function";
import { VariableData } from "../../types/Variable";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "output:number";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //set variable
  let variable: VariableData = {
    type: "number",
    value: Math.random().toString(),
  };
  setVariable(args[0].value, variable);
  //return
  return 1;
};
