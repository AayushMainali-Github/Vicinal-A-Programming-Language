export interface FunctionObject {
  object: string;
  function: string;
  arguments: Array<Args>;
}

export interface Args {
  type: 'number' | 'string' | 'variable' | 'noarg';
  value: string;
}

export interface ComputeArgsData {
  io: string;
  type: string;
}
