const groups = require('../input').split('\n\n');

const answer = groups.reduce((groupAcc, groupCurr) => {

    const counted = new Set();
    let counter = 0;
    for (const letter of groupCurr.replace(/[^A-z]/gm, "")) {
        if (counted.has(letter)) continue;
        counted.add(letter);
        counter++;
    }
    return groupAcc + counter;
}, 0);


console.log(answer);