const { readFile } = require('../00-helpers/helpers');

const { winningBoard } = require('./bingo');
const { getBoards, getSequence } = require('./parseInput');

const input = readFile('./input').toString();

const boards = getBoards(input);
const sequence = getSequence(input);

const part1 = winningBoard(boards, sequence);

console.info('part 1: ', part1[1] * part1[2]);