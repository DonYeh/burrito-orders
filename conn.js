const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'burrito-orders'
};

// make a connection to the database specified by the options object
const db = pgp(options);
module.exports = db;