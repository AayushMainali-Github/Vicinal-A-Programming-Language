import { deleteVariable } from '../../Runtime/variables';
import { FunctionObject, Args } from '../../types/Function';
import computeVars from '../../utils/runFunc/computeVars';
import expandArgsTypes from '../../utils/runFunc/expandArgsTypes';

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = 'output:string';
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //print
  deleteVariable(args[0].value);

  //return
  return 1;
};
