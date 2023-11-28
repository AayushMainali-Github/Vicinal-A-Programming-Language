import fs from "fs";
import error from "../error";
import skip from "./skip";
import validateArgs from "./validateArgs";

export default async function (sourceCode: string): Promise<Array<FunctionObject> | null> {
  let returnArray: Array<FunctionObject> = [];

  for (let i = 0; i < sourceCode.length; i++) {
    //check for skippables
    i = skip(sourceCode, i);
    if (i >= sourceCode.length) break;

    //find object
    const objects: Array<string> = fs.readdirSync("./src/Functions");
    if (objects.length < 1) return error(`Unexpected token`);
    let noObjectFound: boolean = true;

    for (let j = 0; j < objects.length; j++) {
      const obj: string = objects[j];

      //check if object is there
      if (sourceCode.slice(i, i + obj.length) == obj) {
        //check if there is a . after object
        i = i + obj.length;
        if (sourceCode[i] != ".") return error(`Unexpected token`);
        i++;

        //find functions
        const functions: Array<string> = fs.readdirSync(`./src/Functions/${obj}/`);
        if (functions.length < 1) return error(`Unexpected token`);
        let noFunctionFound: boolean = true;

        for (let k = 0; k < functions.length; k++) {
          const func: string = functions[k].slice(0, -3);

          //check if function is there
          if (sourceCode.slice(i, i + func.length) == func) {
            //check if there is a open parathesis
            i = i + func.length;
            if (sourceCode[i] != "(") return error(`Unexpected token`);

            //check for close parenthesis and arguments
            i++;
            let args: Array<Args> | null = null;
            for (let l = i; l < sourceCode.length; l++) {
              if (sourceCode[l] == ")") {
                args = validateArgs(sourceCode.slice(i, l));
                i = l;
                break;
              }
            }
            if (!args) return error(`Unexpected token`);

            //add the function to the return array
            returnArray.push({
              object: obj,
              function: func,
              arguments: args,
            });

            //function found
            noFunctionFound = false;
          }
        }

        //error if no function found
        if (noFunctionFound) return error(`Unexpected token`);

        //object found
        noObjectFound = false;
      }
    }

    //error if no object found
    if (noObjectFound) return error(`Unexpected token`);
  }

  return returnArray;
}
