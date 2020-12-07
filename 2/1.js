const input = require('../input');

let valid = 0;
for (const line of input.split('\n')){
    const [,minStr, maxStr, letter, pass] = line.match(/^(\d+)-(\d+) (\w): (\w+)/);
    const min = Number(minStr);
    const max = Number(maxStr);

    const occurences = pass.split('').filter(x => x === letter).length;
    if (occurences <= max && occurences >= min) valid++;
}
console.log(valid);