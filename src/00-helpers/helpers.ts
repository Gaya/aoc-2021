import fs from 'fs';

export function readFile(filename: string): string | undefined {
  try {
    return fs.readFileSync(filename).toString();
  } catch (err) {
    console.error(err);
  }
}

export function readFileSplitLines(filename: string) {
  return (readFile(filename) || '').split(/\r?\n/);
}