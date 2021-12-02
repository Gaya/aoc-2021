const fs = require('fs');

function readFileSplitLines(filename) {

  try {
    const data = fs.readFileSync(filename);
    return data.toString().split(/\r?\n/);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  readFileSplitLines,
};