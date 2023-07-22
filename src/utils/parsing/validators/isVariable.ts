const lowercaps: string = 'abcdefghijklmnopqrstuvwxyz';
const uppercaps: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers: string = '1234567890';
const special: string = '_-';
const validChars: Array<string> = [...lowercaps, ...uppercaps, ...numbers, ...special];

export default function isVariable(char: string): boolean {
  if (validChars.includes(char)) return true;
  else return false;
}
