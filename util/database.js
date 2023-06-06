const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "learning-node",
    password: 'Nikku@2023'
})


module.exports = pool.promise();