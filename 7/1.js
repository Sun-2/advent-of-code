
//wavy bronze bags contain 5 striped gold bags, 5 light tomato bags.
const rules = require('../input').split('\n').reduce((ruleAcc, ruleCurr) => {
    const [rootBag, contains] = ruleCurr.split(' bags contain ')
    ruleAcc[rootBag] = {};
    if (contains !== "no other bags.") {
        // has some other bags inside
        ruleAcc[rootBag] = ruleCurr.split(',').reduce((containedAcc, containedCurr) => {
            const [, amount, color] = containedCurr.match(/(\d+) (\w+ \w+)/);
            containedAcc[color] = parseInt(amount);
            return containedAcc;
        }, {});
    }
    return ruleAcc;
}, {})


const recur = (name) => Object.keys(rules[name]).some(x => x === "shiny gold" || recur(x));

console.log(Object.keys(rules).reduce((acc, curr) => acc + Number(recur(curr)), 0));