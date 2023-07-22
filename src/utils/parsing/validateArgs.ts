import { Args } from '../../types/Function';
import isNumber from './validators/isNumber';
import isVariable from './validators/isVariable';
import isVariableStart from './validators/isVariableStart';

export default function (args: string): Array<Args> | null {
  const argsArr: Array<string> = args.split(',');
  let returnArr: Array<Args> = [];

  //check if argument exists
  if (argsArr.length == 1 && argsArr[0].trim() == '') {
    returnArr.push({
      type: 'noarg',
      value: '',
    });
  } else {
    //loop through each argument
    for (let i = 0; i < argsArr.length; i++) {
      //removing spaces
      let e = argsArr[i].trimStart().trimEnd();

      //check string
      if (e[0] == '"' && e.slice(-1) == '"') {
        returnArr.push({
          type: 'string',
          value: e.slice(1, -1),
        });
      }

      //check boolean
      else if (e == 'true' || e == 'false') {
        returnArr.push({
          type: 'boolean',
          value: e,
        });
      }

      //check variable
      else if (isVariableStart(e[0])) {
        for (let j = 1; j < e.length; j++) {
          if (!isVariable(e[j])) return null;
        }
        returnArr.push({
          type: 'variable',
          value: e,
        });
      }

      //check number
      else if (isNumber(e[0])) {
        for (let j = 1; j < e.length; j++) {
          if (!isNumber(e[j])) return null;
        }
        returnArr.push({
          type: 'number',
          value: e,
        });
      } else {
        return null;
      }
    }
  }
  return returnArr;
}
