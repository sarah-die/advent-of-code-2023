import { removeLineBreak } from '../utils/utils';

export function star1(file: string): any {
  const data = removeLineBreak(file);
  const cardTypeData = extractWinningAndExistentNumbers(data);
  return calcPoints(cardTypeData);
}

export function extractWinningAndExistentNumbers(data: string[]): number[][][] {
  return data.map(card => {
    return card
      .split(':')[1]
      .split('|')
      .map(numbs => numbs.split(' ').filter(Boolean).map(Number));
  });
}

function calcPoints(cardTypeData: number[][][]): number {
  let res = 0;
  cardTypeData.forEach(card => {
    const intersection = card[0].filter(el => card[1].includes(el));
    if (intersection.length !== 0) {
      res += Math.pow(2, intersection.length - 1);
    }
  });
  return res;
}
