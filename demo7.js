const crocks = require('crocks')
const { identity ,and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks
const { join, split, toLower } = require('ramda')


const article = {
    id: 1,
    _name: 'Learning crocksjs functional programming library'
};

const createUrlSlug = compose(join('-'), split(' '), toLower);
const createUrl = slug => `https://egghead.io/articles/${slug}`;
const createUrlFromName = compose(createUrl, createUrlSlug);
const isNonEmptyString = and(not(isEmpty), isString);


const getArticleUrl = obj => prop('name', obj)
    .chain(safe(isNonEmptyString)) // If return Nothing then use first function of coalesce
    .coalesce(() => 'page not found', createUrlFromName)
    .option('default');

const url = getArticleUrl(article);

console.log(url)