import { removeLineBreak } from '../utils/utils';
import { getFirstAndLastDigit } from './star1';

type replacementType = { letters: string; digit: number }[];

const replacementValues: replacementType = [
  { letters: 'one', digit: 1 },
  { letters: 'two', digit: 2 },
  { letters: 'three', digit: 3 },
  { letters: 'four', digit: 4 },
  { letters: 'five', digit: 5 },
  { letters: 'six', digit: 6 },
  { letters: 'seven', digit: 7 },
  { letters: 'eight', digit: 8 },
  { letters: 'nine', digit: 9 },
];

export function star2(file: string): number {
  const data = removeLineBreak(file);
  const allDigits = data.map(el => replaceLettersByDigit(el));
  return allDigits
    .map(el => getFirstAndLastDigit(el))
    .reduce((acc, cur) => acc + cur, 0);
}

function replaceLettersByDigit(txt: string): string {
  let tempTxt = txt;
  replacementValues.forEach(el => {
    let position = tempTxt.indexOf(el.letters);
    while (position !== -1) {
      tempTxt = setCharAt(tempTxt, position, el.digit);
      position = tempTxt.indexOf(el.letters);
    }
  });
  return tempTxt;
}

function setCharAt(str: string, index: number, char: number): string {
  if (index > str.length - 1) return str;
  return str.substring(0, index + 1) + char + str.substring(index + 2);
}
