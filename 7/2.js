
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


const recur = (name) => Object.entries(rules[name]).reduce((acc, [color, amount]) => acc + amount + recur(color) * amount, 0);

console.log(recur("shiny gold"));