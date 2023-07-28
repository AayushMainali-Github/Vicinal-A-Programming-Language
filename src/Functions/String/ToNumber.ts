import { setVariable } from '../../Runtime/variables';
import { FunctionObject, Args } from '../../types/Function';
import { VariableData } from '../../types/Variable';
import computeVars from '../../utils/runFunc/computeVars';
import expandArgsTypes from '../../utils/runFunc/expandArgsTypes';

module.exports = function (func: FunctionObject) {
  //compute args
  let args1Type: string = 'output:string';
  let args1: Array<Args> | null = computeVars(expandArgsTypes(args1Type), func);
  if (!args1) return;
  let args2Type: string = 'input:string';
  let args2: Array<Args> | null = computeVars(expandArgsTypes(args2Type), func);
  if (!args2) return;

  //set variable
  let variable: VariableData = {
    type: 'number',
    value: Number(args2[0].value).toString(),
  };
  setVariable(args1[0].value, variable);
  //return
  return 1;
};
