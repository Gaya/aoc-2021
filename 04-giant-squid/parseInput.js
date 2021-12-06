function getSequence(input) {
  return input
    // find numbers on first line
    .match(/^(\d+,?)+$/m)[0]
    // split into array
    .split(',')
    // convert to numbers
    .map((i) => parseInt(i, 10));
}

function getBoards(input) {
  const boards = input.match(/^( ?([0-9]+ *)+\n?)+$/gm);

  return boards
    .map((board) => {
      return board
        .split('\n')
        .filter((row) => row.trim() !== '')
        .map((row) => {
          const cells = row
            .trim()
            .split(/\s+/);

          return cells
            .map((cell) => parseInt(cell.trim(), 10));
        });
    });
}

module.exports = {
  getSequence,
  getBoards,
};