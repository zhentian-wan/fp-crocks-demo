/*const safe = require('crocks/Maybe/safe');
const { not, compose, isNil, prop } = require('ramda');*/

const prop = require('crocks/Maybe/prop');
const { inc } = require('./utils');

/*
const isNotNil = safe(compose(not, isNil));
const safeProp = propName => obj => isNotNil(prop(propName, obj));
*/
const safePage = prop('page');

const qs = { page: 4, pageSize: 10, totalPages: 203 };
const result = safePage(qs).option(1);

console.log(result);