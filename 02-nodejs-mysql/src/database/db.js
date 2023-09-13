const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root@123',
  database: 'productConcept',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // connectTimeout: 60000
});

module.exports = pool;