import { removeLineBreak } from '../utils/utils';

export function star1(file: string): number {
  const data = removeLineBreak(file);
  return data
    .map(el => getFirstAndLastDigit(el))
    .reduce((acc, cur) => acc + cur, 0);
}

export function getFirstAndLastDigit(exp: string): number {
  const allNumbs = exp.replace(/[^0-9]/g, '');
  const firstAndLast = allNumbs[0] + allNumbs.slice(-1);
  return Number(firstAndLast);
}
