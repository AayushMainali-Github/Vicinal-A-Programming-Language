import { getAllVariable } from '../../Runtime/variables';
import { FunctionObject, Args } from '../../types/Function';
import computeVars from '../../utils/runFunc/computeVars';
import expandArgsTypes from '../../utils/runFunc/expandArgsTypes';

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = '';
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //print
  console.log(getAllVariable());

  //return
  return 1;
};