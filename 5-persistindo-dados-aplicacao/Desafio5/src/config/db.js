const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: 1457,
    host: 'localhost',
    port:5432,
    database: 'foodfy'
})
