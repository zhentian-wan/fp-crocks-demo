const crocks = require('crocks')
const { and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks
const { join, split, toLower } = require('ramda')


const article = {
    id: 1,
    name: 'Learning crocksjs functional programming library'
};

const createUrlSlug = compose(join('-'), split(' '), toLower);
const createUrl = slug => `https://egghead.io/articles/${slug}`;
const createUrlFromName = compose(createUrl, createUrlSlug);
const isNonEmptyString = and(not(isEmpty), isString);


const getArticleName = obj => prop('name', obj)
    .chain(safe(isNonEmptyString))
    .alt(Maybe.of('page not found'));

const getArticleUrl = obj => getArticleName(obj)
    .map(createUrlFromName)
    .option('default');

const url = getArticleUrl(article);

console.log(url)