import { removeLineBreak } from '../utils/utils';
import { extractWinningAndExistentNumbers } from './star1';

export function star2(file: string): number {
  const data = removeLineBreak(file);
  const cardTypeData = extractWinningAndExistentNumbers(data);
  const matchesPerCard = calcMatchesPerCard(cardTypeData);
  return calcWonScratchcards(matchesPerCard);
}

function calcMatchesPerCard(cardTypeData: number[][][]): number[] {
  return cardTypeData.map(card => {
    const intersection = card[0].filter(el => card[1].includes(el));
    return intersection.length;
  });
}

function calcWonScratchcards(matchesPerCard: number[]): number {
  const totalCards = matchesPerCard.map(matches => {
    return { matches: matches, total: 1 };
  });
  totalCards.forEach((card, index) => {
    if (card.matches !== 0) {
      for (let n = index + 1; n <= index + card.matches; n++) {
        totalCards[n].total += card.total;
      }
    }
  });
  return totalCards.reduce((acc, cur) => acc + cur.total, 0);
}
