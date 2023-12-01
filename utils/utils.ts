import fs from 'fs';

export function readFile(file: string): string {
  return fs.readFileSync(file).toString();
}

export function writeFile(data: string) {
  fs.writeFileSync('output', data);
}

export function removeLineBreak(file: string): string[] {
  return readFile(file).split('\n');
}
