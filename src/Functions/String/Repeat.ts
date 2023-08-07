import { setVariable } from "../../utils/runtime/variables";
import { FunctionObject, Args } from "../../types/Function";
import { VariableData } from "../../types/Variable";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "input:string,input:number,output:string";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //set variable
  let variable: VariableData = {
    type: "string",
    value: `${args[0].value.repeat(Number(args[1].value))}`,
  };
  setVariable(args[2].value, variable);

  //return
  return 1;
};
