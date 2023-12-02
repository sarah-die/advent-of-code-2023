import { removeLineBreak } from '../utils/utils';

type cubesType = { red: number; green: number; blue: number };

export function star1(file: string): number {
  const data = removeLineBreak(file);
  return data
    .map(extractAmountOfCubes)
    .map(getMaxPerGame)
    .reduce(
      (acc, cur, index) =>
        cur.red <= 12 && cur.green <= 13 && cur.blue <= 14
          ? acc + (index + 1)
          : acc,
      0
    );
}

export function extractAmountOfCubes(line: string): cubesType[] {
  return line
    .split(': ')[1]
    .split('; ')
    .map(reach => {
      const xColorArray = reach.split(', ').map(color => color.split(' '));
      return {
        red: Number(xColorArray.find(xColor => xColor[1] === 'red')?.[0]) || 0,
        green:
          Number(xColorArray.find(xColor => xColor[1] === 'green')?.[0]) || 0,
        blue:
          Number(xColorArray.find(xColor => xColor[1] === 'blue')?.[0]) || 0,
      };
    });
}

export function getMaxPerGame(game: cubesType[]): cubesType {
  const red = Math.max(...game.map(reach => reach.red));
  const green = Math.max(...game.map(reach => reach.green));
  const blue = Math.max(...game.map(reach => reach.blue));
  return { red, green, blue };
}
