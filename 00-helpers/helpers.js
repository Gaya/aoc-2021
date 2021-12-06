const fs = require('fs');

function readFile(filename) {
  try {
    return fs.readFileSync(filename);
  } catch (err) {
    console.error(err);
  }
}

function readFileSplitLines(filename) {
  return readFile(filename).toString().split(/\r?\n/);
}

module.exports = {
  readFile,
  readFileSplitLines,
};