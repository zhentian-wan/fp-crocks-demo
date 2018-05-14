const crocks = require('crocks')
const { ap, safe, isNumber, Maybe, curry, liftA2 } = crocks;

const safeNum1 = safe(isNumber, 1);
const safeNum2 = safe(isNumber, 2);

const add = curry((a, b) => a + b);

const addTwoSafeNums = liftA2(add);
const res = addTwoSafeNums(safeNum1, safeNum2);

console.log(res) // Just 3