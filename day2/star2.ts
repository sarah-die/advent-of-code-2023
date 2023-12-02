import { removeLineBreak } from '../utils/utils';
import { extractAmountOfCubes, getMaxPerGame } from './star1';

export function star2(file: string): number {
  const data = removeLineBreak(file);
  return data
    .map(extractAmountOfCubes)
    .map(getMaxPerGame)
    .reduce((acc, cur) => {
      const product = cur.red * cur.green * cur.blue;
      return acc + product;
    }, 0);
}
