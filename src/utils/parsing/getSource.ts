import fs from 'fs';

export default async function (filepath: string): Promise<string> {
  const sourceCode: string = await fs.readFileSync(`./Code/${filepath}.vcnl`, 'utf-8');
  return sourceCode;
}
