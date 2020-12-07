const input = require('../input');

const fields = ["byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    //"cid"
]

const validators = {
    byr: val => val.match(/^\d{4}$/) && Number(val) >= 1920 && Number(val) <= 2002,
    iyr: val => val.match(/^\d{4}$/) && Number(val) >= 2010 && Number(val) <= 2020,
    eyr: val => val.match(/^\d{4}$/) && Number(val) >= 2020 && Number(val) <= 2030,
    hgt: val => {
        const int = parseInt(val);
        if (val.match(/^\d+cm$/)) return int >= 150 && int <= 193;
        if (val.match(/^\d+in$/)) return int >= 59 && int <= 76;
        return false;
    },
    hcl: val => val.match(/^#[0-9a-f]{6}$/),
    ecl: val => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val),
    pid: val => val.match(/^[0-9]{9}$/)
}

const answer = input.split('\n\n').reduce((acc, passport) => {
    return acc + Number(fields.every(field => {
        const match = passport.match(new RegExp(`${field}:(.*?)(?: |$)`, "m"));
        return match && match[1] && validators[field](match[1]);
    }));
}, 0);

console.log(answer);