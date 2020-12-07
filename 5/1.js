const passes = require('../input').split('\n').map(x => x.trim());

const decode = (str, hToken, lToken) => {
    return parseInt(str.replace(new RegExp(hToken, "g"), "1").replace(new RegExp(lToken, "g"), "0"), 2);
}


const answer = passes.reduce((highest, curr) => {
    const columnLetters = curr.slice(0, 7);
    const rowLetters = curr.slice(7);

    const columnNo = decode(columnLetters, "B", "F");
    const rowNo = decode(rowLetters, "R", "L");
    
    const id = columnNo * 8 + rowNo;
    return Math.max(highest, id);
}, 0);

console.log(answer);