const mysql = require("mysql")
require('dotenv').config()
var connection 

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: 'burgers_db'
    })
}

connection.connect();

module.exports = connection