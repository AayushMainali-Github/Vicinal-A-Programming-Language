import { VariableData } from '../types/Variable';

let variables: Record<string, VariableData> = {};

export function setVariable(variableName: string, variableData: VariableData) {
  variables[variableName] = variableData;
}

export function getVariable(variableName: string): VariableData | null {
  if (variables[variableName]) return variables[variableName];
  else return null;
}

export function getAllVariable(): Record<string, VariableData> {
  return variables;
}

export function deleteVariable(variableName: string) {
  delete variables[variableName];
}
