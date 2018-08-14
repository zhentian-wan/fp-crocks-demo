const R = require("ramda");

const thoughNToLimit = R.curry((limit, n) => (n > limit ? false : [n, n + 1]));

const res = R.unfold(thoughNToLimit(15), 7);

console.log(res); // [7, 8, 9, 10, 11, 12, 13, 14, 15]
