const input = require('../input');

const map = input.split('\n');

const tree = '#';
const free = '.';

const rowLen = map[0].length;
const colLen = map.length;

let treeHits = 0;
for (let row = 0, column = 0; column < colLen;) {
    if (map[column][row] === tree) treeHits++;
    row = (row + 3) % rowLen;
    column = column + 1;
}

console.log(treeHits);