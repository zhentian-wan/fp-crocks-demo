const prop = require('crocks/Maybe/prop');
const propPath = require('crocks/Maybe/propPath');

/**
 * return Maybe type
 */
const getUser = id =>
    new Promise((resolve, reject) => {
        const result = {
            status: 200,
            body: {
                id: 1,
                username: 'tester',
                email: 'test@gmail.com',
                _address: {
                    street: '111 E. West St',
                    city: 'Anywhere',
                    state: 'PA',
                    postalCode: '19123-4567'
                }
            }
        }
        resolve(prop('body', result)); // return Just {}
    });


const getPostalCode = propPath(['address', 'postalCode']);

getUser(1)
    .then(user => user.chain(getPostalCode).option("not available")) // map to Just {} --> Just Just '19123-4567'
    .then(console.log); // Just Just "19123-4567"