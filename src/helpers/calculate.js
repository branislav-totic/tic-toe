export function calculateWinner(sqaures) {
  const lines = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[b] === sqaures[c]) {
      return sqaures[a];
    }
  }

  return null;
}
