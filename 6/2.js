const groups = require('../input').split('\n\n');

const answer = groups.reduce((groupAcc, groupCurr) => {
    const counter = {};
    
    for (const letter of groupCurr.replace(/[^A-z]/gm, "")) {
        if (!counter[letter]) counter[letter] = 0;
        counter[letter]++;
    }

    const peopleAmount = groupCurr.split('\n').length;
    return groupAcc + Object.values(counter).reduce((acc, occurences) => occurences === peopleAmount ? acc + 1 : acc, 0);
}, 0);


console.log(answer);