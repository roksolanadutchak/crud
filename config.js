var mysql = require('mysql')
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'admin',
//     password: 'password',
//     database: 'users'
//   })
module.exports = connection;
