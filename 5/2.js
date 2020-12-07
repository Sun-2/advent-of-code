const passes = require('../input').split('\n').map(x => x.trim());

const decode = (str, hToken, lToken) => {
    return parseInt(str.replace(new RegExp(hToken, "g"), "1").replace(new RegExp(lToken, "g"), "0"), 2);
}


const arr = Array.from({ length: 127 * 8 + 7 }).fill(false);

passes.map(curr => {
    const columnLetters = curr.slice(0, 7);
    const rowLetters = curr.slice(7);

    const columnNo = decode(columnLetters, "B", "F");
    const rowNo = decode(rowLetters, "R", "L");

    return columnNo * 8 + rowNo;
}).forEach(x => arr[x] = true);


for (let i = 0; i < arr.length; i++)
    if (arr[i] === false
        && arr[i - 1] === true
        && arr[i + 1] === true)
        console.log(i);