import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "usuario",
    password: "senha",
    database: "nomeDoDB",
});

export default connection;