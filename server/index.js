// const express = require('express');
// const mariadb = require('mariadb');
// const cors = require('cors'); 
// const app = express();
// const port = 3001;

// app.use(cors({
//     origin: '*', // Allow all origins
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allow all headers
// }));

// const pool = mariadb.createPool({
//     host: "127.0.0.1",
//     user: "root",
//     password: process.env.Passord,
//     // password: "Bill3101",
//     database: "jobber"
// });



// app.get('/api/data', async (req, res) => {
//     let conn;
//     try {
//         conn = await pool.getConnection();
//         const rows = await conn.query('SELECT * FROM Jobbkort');
//         res.json(rows);
//     } catch (err) {
//         console.log("Error while connecting to MariaDB or executing query:", err);
//         res.status(500).send(err);
//     } finally {
//         if (conn) conn.end();
//     }
// });

// app.listen(3001, () => {
//     console.log(`Server listening at http://localhost:${port}`)
// });


const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors'); 
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; 
const key = crypto.scryptSync('encryptionKey', 'salt', 32);
const iv = Buffer.alloc(16, 0); // Initialization vector.


// Decryption function
function decrypt(text) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// Get and decrypt the database password
const encryptedPassword = process.env.Password;
const decryptedPassword = decrypt(encryptedPassword);
console.log('Decrypted password:', decryptedPassword); // Log the decrypted password

const app = express();
const port = 3001;

app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow all headers
}));

const pool = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    password: decryptedPassword,
    database: "jobber"
});

app.get('/api/data', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM Jobbkort');
        res.json(rows);
    } catch (err) {
        console.log("Error while connecting to MariaDB or executing query:", err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.end();
    }
});

app.listen(3001, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`)
});
