import { ComputeArgsData } from '../../types/Function';

// example args string : "input:string,output:number"

export default function (argsType: string): Array<ComputeArgsData> {
  let types: Array<ComputeArgsData> = [];
  if (argsType.length == 0) return types;
  argsType.split(',').forEach((e) => {
    types.push({ io: e.split(':')[0], type: e.split(':')[1] });
  });
  return types;
}
