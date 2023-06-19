const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  host: 'database',
  user: 'root',
  port: '3306',
  password: 'admin',
  database: 'shooesstore',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;