const nums = require('../input').split('\n').map(x => parseInt(x));
console.log(nums)
const set = new Set(nums);

for (let i = 0; i < nums.length; i++) {
    const iElem = nums[i]
    for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;

        const jElem = nums[j];
        const last = 2020 - iElem - jElem;
        if (set.has(last)) return console.log(iElem * jElem * last);
    }
}
