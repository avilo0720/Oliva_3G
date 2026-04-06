const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test_db',
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;