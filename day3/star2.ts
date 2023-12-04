import { removeLineBreak } from '../utils/utils';
import { isNumber } from './star1';

type numberType = {
  row: number;
  startCol: number;
  endCol: number;
  numb: number;
};

export function star2(file: string): number {
  const data = removeLineBreak(file).map(line => [...line]);
  const allNumbers = identifyAllNumbers(data);
  return identifyAllGears(data, allNumbers);
}

// * = gear [adjacent to exactly two part numbers]
// gear ratio = res of multiplying those numbers together

function identifyAllNumbers(data: string[][]): numberType[] {
  let res: numberType[] = [];

  data.forEach((row, rowIndex) => {
    let i = 1;
    row.forEach((el, colIndex) => {
      if (i > 1) {
        i--;
      } else {
        if (isNumber(el)) {
          let wholeNumbAsString = el;
          while (isNumber(data[rowIndex][colIndex + i])) {
            wholeNumbAsString += data[rowIndex][colIndex + i];
            i++;
          }
          const newNumber: numberType = {
            row: rowIndex,
            startCol: colIndex,
            endCol: colIndex + i - 1,
            numb: Number(wholeNumbAsString),
          };
          res.push(newNumber);
        }
      }
    });
  });
  return res;
}

function identifyAllGears(data: string[][], allNumbers: numberType[]): number {
  let sum = 0;
  data.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (isStarSymbol(el)) {
        sum += calcGearRatio({ row: rowIndex, col: colIndex }, allNumbers);
      }
    });
  });
  return sum;
}

function calcGearRatio(
  gearPosition: { row: number; col: number },
  allNumbers: numberType[]
): number {
  let partNumbers: number[] = [];

  allNumbers.forEach(numb => {
    if (numb.row >= gearPosition.row - 1 && numb.row <= gearPosition.row + 1) {
      if (
        gearPosition.col - 1 <= numb.endCol &&
        numb.startCol <= gearPosition.col + 1
      ) {
        partNumbers.push(numb.numb);
      }
    }
  });

  if (partNumbers.length === 2) {
    return partNumbers.reduce((acc, cur) => acc * cur, 1);
  }
  return 0;
}

function isStarSymbol(value: string): boolean {
  return value === '*';
}
