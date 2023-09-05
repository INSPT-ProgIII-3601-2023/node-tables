#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

const {get_tabla} = require("./table-manager/manager");
let {n, max, ver} = argv;
console.log(get_tabla(n,max));


/*
Esto era antes (es5)
let n = argv.n;
let max = argv.max;
let ver = argv.ver;
*/

/*es6 (forma moderna)*/ 




