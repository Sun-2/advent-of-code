const ops = require('../input').split('\n').map(line => {
    const [, op, arg] = line.match(/(\w{3}) ((?:\+|-)\d+)/);
    return {op, arg: parseInt(arg)};
})


let ip = 0;
let acc = 0;

const executed = Array.from({length:ops.length}).fill(false);

while (!executed[ip]) {
    executed[ip] = true;
    const {op, arg} = ops[ip];
    if (op === "jmp") ip += arg;
    else if (op === "acc") {
        acc += arg;
        ip++;
    } else if (op === "nop") ip++;
    
}

console.log(acc);