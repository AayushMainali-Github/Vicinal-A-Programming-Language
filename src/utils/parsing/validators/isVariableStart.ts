const lowercaps: string = 'abcdefghijklmnopqrstuvwxyz';
const uppercaps: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const special: string = '_';
const validChars: Array<string> = [...lowercaps, ...uppercaps, ...special];

export default function isVariableStart(char: string): boolean {
  if (validChars.includes(char)) return true;
  else return false;
}
