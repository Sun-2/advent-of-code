const {dirname, resolve} = require('path');
const fs = require('fs');

module.exports = fs.readFileSync(resolve(dirname(process.argv[1]), "input.txt"), "utf-8");