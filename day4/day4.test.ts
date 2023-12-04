import { star1 } from './star1';
import * as path from 'path';
import { star2 } from './star2';

describe('check the scratch cards (input) and', () => {
  it('return the points', () => {
    expect(star1(path.join('day4', 'testData'))).toBe(13);
  });
  it('return total of won scratchcards', () => {
    expect(star2(path.join('day4', 'testData'))).toBe(30);
  });
});
