const mysql = require("mysql2/promise");

// Create a connection pool (recommended) for your databse instead of a straight connection
const pool = mysql.createPool({
  host: "sql5.freesqldatabase.com",
  user: "sql5820138",
  password: "y6ly8SwB53",
  database: "sql5820138",
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

//now export pool so you can use it in server.js to establish your api connection routes 
module.exports = pool;