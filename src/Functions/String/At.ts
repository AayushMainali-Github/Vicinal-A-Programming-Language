import { setVariable } from "../../utils/runtime/variables";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";
import error from "../../utils/error";

module.exports = function (func: FunctionObject) {
  const errorMessage = `Invalid argument in the function ${func.object}.${func.function}(). Check out documentation.`;

  //compute args
  let argsType: string = "input:string,input:number,output:string";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //check if the index exists
  if (args[0].value.length <= Number(args[1].value)) return error(errorMessage);

  //set variable
  let variable: VariableData = {
    type: "string",
    value: `${args[0].value[Number(args[1].value)]}`,
  };
  setVariable(args[2].value, variable);

  //return
  return 1;
};
