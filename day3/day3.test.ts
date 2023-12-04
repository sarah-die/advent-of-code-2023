import { star1 } from './star1';
import * as path from 'path';
import { star2 } from './star2';

describe('check the engine schematic (input) and', () => {
  it('return the sum of the part numbers (number adjacent to a symbol)', () => {
    expect(star1(path.join('day3', 'testData'))).toBe(4361);
  });
  it('return the sum of gear ratios (gears (* adjacent to exactly two part numbers) multiplied)', () => {
    expect(star2(path.join('day3', 'testData'))).toBe(467835);
  });
});
