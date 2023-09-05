#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

const fs = require('fs');

const {get_tabla} = require("./table-manager/manager");

let {n, max, ver} = argv;
console.log(get_tabla(n,max));

fs.appendFile(`./results/tabla-del-${n}.txt`,get_tabla(n).toString(), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/*
Esto era antes (es5)
let n = argv.n;
let max = argv.max;
let ver = argv.ver;
*/

/*es6 (forma moderna)*/ 




