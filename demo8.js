const crocks = require('crocks')
const { and, compose, isEmpty, isString, option, Maybe, not, prop, safe, chain, map, alt } = crocks
const { join, split, toLower } = require('ramda')


const article = {
    id: 1,
    _name: 'Learning crocksjs functional programming library'
};

const createUrlSlug = compose(join('-'), split(' '), toLower);
const createUrl = slug => `https://egghead.io/articles/${slug}`;
const createUrlFromName = compose(createUrl, createUrlSlug);
const isNonEmptyString = and(not(isEmpty), isString);


const getArticleUrl = compose(
    option('default'),
    map(createUrlFromName),
    alt(Maybe.of('page not found')),
    chain(safe(isNonEmptyString)),
    prop('name')
);
/*
const getArticleName = obj => prop('name', obj)
    .chain(safe(isNonEmptyString)) // If return Nothing then use alt value
    .alt(Maybe.of('page not found'));

const getArticleUrl = obj => getArticleName(obj)
    .map(createUrlFromName)
    .option('default');*/

const url = getArticleUrl(article);

console.log(url)