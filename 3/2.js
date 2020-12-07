const input = require('../input');

const map = input.split('\n');

const tree = '#';
const free = '.';

const rowLen = map[0].length;
const colLen = map.length;

const shifts = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
const answer = shifts.reduce((acc, [rowShift, colShift]) => {
    let treeHits = 0;
    for (let row = 0, column = 0; column < colLen;) {
        if (map[column][row] === tree) treeHits++;
        console.log(column, row, map[column][row]);
        
        row = (row + rowShift) % rowLen;
        column = column + colShift;
    }
    return acc * treeHits
}, 1);

console.log(answer);