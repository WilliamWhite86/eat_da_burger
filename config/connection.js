const mysql = require("mysql")
require('dotenv').config()
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'burgers_db'
})

connection.connect();

module.exports = connection