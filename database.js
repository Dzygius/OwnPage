const mysql = require("mysql2");
const dbConnection = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Zorgas123",
    database: "users",
  })
  .promise();
module.exports = dbConnection;
