import { getVariable } from "../runtime/variables";
import error from "../error";

export default function (types: Array<ComputeArgsData>, func: FunctionObject): Array<Args> | null {
  const errorMessage = `Invalid argument in the function ${func.object}.${func.function}(). Check out documentation.`;
  let args: Array<Args> = func.arguments;
  let computedArgs: Array<Args> = [];

  //check if sufficient number of arg
  if (args.length < types.length) return error(errorMessage);

  //check each argument
  for (let i = 0; i < types.length; i++) {
    //input
    if (types[i].io == "input") {
      if (args[i].type == types[i].type) computedArgs.push(args[i]);
      else if (args[i].type == "variable" && getVariable(args[i].value)?.type == types[i].type) computedArgs.push(getVariable(args[i].value) as Args);
      else return error(errorMessage);
    }
    //output
    else if (types[i].io == "output") {
      if (args[i].type == "variable" && getVariable(args[i].value)?.type == types[i].type) computedArgs.push(args[i]);
      else return error(errorMessage);
    }
    //new output
    else if (types[i].io == "newoutput") {
      if (args[i].type == "variable" && !getVariable(args[i].value)) computedArgs.push(args[i]);
      else return error(errorMessage);
    }
    //input with name
    else if (types[i].io == "nameinput") {
      if (args[i].type == "variable" && getVariable(args[i].value)?.type == types[i].type) {
        let vardata: Args = getVariable(args[i].value) as Args;
        vardata.name = args[i].value;
        computedArgs.push(vardata);
      } else return error(errorMessage);
    }
    //error
    else {
      return error(errorMessage);
    }
  }
  return computedArgs;
}
