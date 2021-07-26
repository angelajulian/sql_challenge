const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "m1cr0s0ft",
  database: "company",
});
connection.connect(function (err) {
  if (err) {
    throw err;
  }
});

module.exports = connection;
