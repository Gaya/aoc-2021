function winningBoard(boards, sequence, checking = []) {
  const rowSize = boards[0].length;
  const colSize = boards[0][0].length;

  const minSequence = Math.min(rowSize, colSize);

  // too little in sequence to check
  if (sequence.length < minSequence) {
    return null;
  }

  // numbers to check
  const winning = boards.findIndex((board) => {
    // has winning row
    if (board.some((row) => row.every((cell) => checking.includes(cell)))) {
      return true;
    }

    // has winning column
    if (board[0].some((_, index) => board.every((row) => checking.includes(row[index])))) {
      return true;
    }

    return false;
  });

  // no winning board found
  if (winning === -1 && sequence.length === checking.length) {
    return null;
  }

  if (winning === -1) {
    return winningBoard(boards, sequence, sequence.slice(0, checking.length + 1));
  }

  const sumOfUnchecked = boards[winning]
    .reduce((acc, row) => [...acc, ...row], [])
    .filter((cell) => !checking.includes(cell)).reduce((a, b) => a + b);

  return [winning, checking[checking.length - 1], sumOfUnchecked]
}

function lastWinningBoard(boards, sequence, lastWinner = null) {
  if (boards.length === 0) {
    return lastWinner;
  }

  const winner = winningBoard(boards, sequence);

  if (winner) {
    const remainingBoards = [...boards];
    remainingBoards.splice(winner[0], 1);

    return lastWinningBoard(
      remainingBoards,
      sequence,
      winner,
    );
  }

  return lastWinner;
}

module.exports = {
  winningBoard,
  lastWinningBoard,
};