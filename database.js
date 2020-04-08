const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'localhost', // MYSQL HOST NAME
    user: 'root', // MYSQL USERNAME
    password: 'Zorgas123', // MYSQL PASSWORD
    database: 'users' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;