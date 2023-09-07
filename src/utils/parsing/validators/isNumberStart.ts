const numbers: Array<string> = ["-", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export default function isNumberStart(char: string): boolean {
  if (numbers.includes(char)) return true;
  else return false;
}
