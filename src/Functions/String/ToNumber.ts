import { setVariable } from "../../utils/runtime/variables";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "nameinput:string";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args || !args[0].name) return;

  //set variable
  let variable: VariableData = {
    type: "number",
    value: Number(args[0].value).toString(),
  };
  setVariable(args[0].name, variable);
  //return
  return 1;
};
