export default function skip(sourceCode: string, index: number): number {
  if (sourceCode[index] == ' ') return skip(sourceCode, index + 1);
  else if (/\r|\n/.exec(sourceCode.slice(index, index + 2))) return skip(sourceCode, index + 2);
  else return index;
}
