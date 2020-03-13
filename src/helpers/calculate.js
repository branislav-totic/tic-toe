export function calculateWinner(sqaures) {
  const lines = [
    [0, 1, 2, `first-row`],
    [3, 4, 5, `second-row`],
    [6, 7, 8, `third-row`],
    [0, 3, 6, `first-column`],
    [1, 4, 7, `second-column`],
    [2, 5, 8, `thrid-column`],
    [0, 4, 8, `left-right`],
    [6, 4, 2, `right-left`],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[b] === sqaures[c]) {
      return { winner: sqaures[a], winnerCondition: d };
    }
  }

  return { winner: null, winnerCondition: null };
}
