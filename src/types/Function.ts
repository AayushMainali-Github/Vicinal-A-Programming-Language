export interface FunctionObject {
  object: string;
  function: string;
  arguments: Array<Args>;
}

export interface Args {
  type: 'number' | 'string' | 'boolean' | 'variable' | 'noarg';
  value: string;
  name?: string;
}

export interface ComputeArgsData {
  io: string;
  type: string;
}
