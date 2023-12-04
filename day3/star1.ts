import { removeLineBreak } from '../utils/utils';

export function star1(file: string): number {
  const data = removeLineBreak(file).map(line => [...line]);
  return findAllNumbers(data);
}

function findAllNumbers(data: string[][]): number {
  let res = 0;

  data.forEach((row, rowIndex) => {
    let i = 1;
    row.forEach((col, colIndex) => {
      if (i > 1) {
        i--;
      } else {
        if (isNumber(col)) {
          let wholeNumbAsString = col;
          while (isNumber(data[rowIndex][colIndex + i])) {
            wholeNumbAsString += data[rowIndex][colIndex + i];
            i++;
          }
          const position = {
            row: rowIndex,
            startCol: colIndex,
            endCol: colIndex + i - 1,
          };
          if (checkAdjacentCells(data, position)) {
            res += Number(wholeNumbAsString);
          }
        }
      }
    });
  });
  return res;
}

// [row] [col]
function checkAdjacentCells(
  data: string[][],
  position: { row: number; startCol: number; endCol: number }
): boolean {
  for (let col = position.startCol - 1; col <= position.endCol + 1; col++) {
    if (isSymbol(data[position.row - 1]?.[col])) {
      return true;
    }
    if (isSymbol(data[position.row + 1]?.[col])) {
      return true;
    }
  }
  if (isSymbol(data[position.row][position.startCol - 1])) return true;
  if (isSymbol(data[position.row][position.endCol + 1])) return true;
  return false;
}

function isSymbol(value: string): boolean {
  return value !== '.' && !isNumber(value) && !!value;
}

export function isNumber(value: string): boolean {
  const n = Number(value);
  return !!n || n === 0;
}
