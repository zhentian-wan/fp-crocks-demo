const crocks = require('crocks');
const { safeLift, safe, isNumber } = crocks;

const dbl = n => n * 2;
/*
const safeDbl = n => safe(isNumber, n).map(dbl);
*/

const safeDbl = safeLift(isNumber, dbl);
const res = safeDbl(2).option(0);

console.log(res)
