const Pool = require("pg").Pool;

const pool = new Pool({
    user: "okiri",
    host: "okiri.postgres.database.azure.com",
    dbname: "okiri",
    password: "Micheal112@",
    port: 5432
});

module.exports = pool;