interface FunctionObject {
  object: string;
  function: string;
  arguments: Array<Args>;
}

interface Args {
  type: "number" | "string" | "boolean" | "variable" | "noarg";
  value: string;
  name?: string;
}

interface ComputeArgsData {
  io: string;
  type: string;
}
