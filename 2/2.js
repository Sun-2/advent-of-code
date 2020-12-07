const input = require('../input');

let valid = 0;
for (const line of input.split('\n')){
    const [,minStr, maxStr, letter, pass] = line.match(/^(\d+)-(\d+) (\w): (\w+)/);
    const pos1 = Number(minStr);
    const pos2 = Number(maxStr);

    
    if (pass[pos1 - 1] === letter ^ pass[pos2 - 1] === letter) valid++;
}
console.log(valid);