import { setVariable } from "../../utils/runtime/variables";
import { FunctionObject, Args } from "../../types/Function";
import { VariableData } from "../../types/Variable";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "input:number,input:number,output:number";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //set variable
  let variable: VariableData = {
    type: "number",
    value: Math.trunc(eval(`${args[0].value}/${args[1].value}`)).toString(),
  };
  setVariable(args[2].value, variable);
  //return
  return 1;
};
