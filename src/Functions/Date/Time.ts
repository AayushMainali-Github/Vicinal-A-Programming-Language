import { setVariable } from "../../utils/runtime/variables";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";
import { format } from "date-fns";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "output:string";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //set variable
  let variable: VariableData = {
    type: "string",
    value: format(new Date(), "HH:mm:ss"),
  };
  setVariable(args[0].value, variable);

  //return
  return 1;
};
