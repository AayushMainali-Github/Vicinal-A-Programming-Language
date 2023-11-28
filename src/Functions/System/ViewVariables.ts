import { getAllVariable } from "../../utils/runtime/variables";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //print
  console.log(getAllVariable());

  //return
  return 1;
};
