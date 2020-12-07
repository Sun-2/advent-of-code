const input = require('../input');

const fields = ["byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    //"cid"
];

const answer = input.split('\n\n').reduce((acc, passport) => {
    
    return acc + Number(fields.every(field => passport.includes(field)));
}, 0);

console.log(answer);