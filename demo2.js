const {inc, upper} = require('./utils');
const Maybe = require('crocks/Maybe');
const safe = require('crocks/Maybe/safe');
const { isNumber, isString} = require('crocks/predicates');

/*
const isNumber = n => typeof n === 'number' ? Maybe.Just(n) : Maybe.Nothing();
const isString = s => typeof s === 'string' ? Maybe.Just(s) : Maybe.Nothing();
const safe = pred => val => pred(val);
*/
const safeNum = safe(isNumber);
const safeStr = safe(isString);

const inputN = safeNum(2); // Just 3 -> 3
const inputS = safeStr('test'); //  Just TEST -> TEST
const input = safeStr(undefined); // Nothing -> 0

const result = inputS
    .map(upper)
    .option("");

console.log(result);