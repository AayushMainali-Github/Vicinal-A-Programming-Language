const numbers: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export default function isNumber(char: string, alreadyFloat: boolean): boolean {
  if (numbers.includes(char) || (char == "." && !alreadyFloat)) return true;
  else return false;
}
