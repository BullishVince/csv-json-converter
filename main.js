#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: \n-i [path to the input file which you want to convert]\n-o [filepath used to store the output]')
    .demandOption(['i','o'])
    .argv;
const fs = require('fs');
converter = require('./converter');

console.log(`Input: ${argv.i} , Output: ${argv.o}`);
console.log('Running application...');

if (String(argv.i).includes('.csv')) {
    json = converter.convertToJson(argv.i);
    fs.writeFile(argv.o, json, err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Saved result to ${argv.o}`);
      })
} else {
    console.log('Converting JSON to CSV');
}