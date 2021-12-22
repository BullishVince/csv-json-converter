#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: \n-i [path to the input file which you want to convert]\n-o [filepath used to store the output]')
    .demandOption(['i','o'])
    .argv;

console.log(`Input: ${argv.i} , Output: ${argv.o}`);