const {inc} = require('./utils');
const Maybe = require('crocks/Maybe');

// Maybe.Just, Maybe.Nothing

/*
const res = inc(2); // 3
const res1 = inc('2'); // 21
const res2 = inc(undefined); // NaN
*/

const safeNum = n => typeof n === 'number' ? Maybe.Just(n) : Maybe.Nothing();
const input = safeNum(2); // Just 3
// const input = safeNum('2'); // Nothing
// const input = safeNum(undefined); // Nothing
const result = input
    .map(inc)
    .option(0);

console.log(result);