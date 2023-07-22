import { setVariable } from '../../Runtime/variables';
import { FunctionObject, Args } from '../../types/Function';
import { VariableData } from '../../types/Variable';
import computeVars from '../../utils/runFunc/computeVars';
import expandArgsTypes from '../../utils/runFunc/expandArgsTypes';

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = 'newoutput:boolean,input:boolean';
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //make variable
  setVariable(args[0].value, args[1] as VariableData);

  //return
  return 1;
};
