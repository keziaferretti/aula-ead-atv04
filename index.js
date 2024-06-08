const express = require('express');
const mysql = require('mysql2');
const os = require('os'); 

const app = express();
const port = 4000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'passwd',
    database: 'db_aula'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida.');
    }
});

app.get('/liveness', (req, res) => {
    const response = {
        message: "Atividade 4",
        path: process.cwd(),
    };
    if (typeof process.getgid === 'function') {
        response.gid = process.getgid();
    }
    if (typeof process.getuid === 'function') {
        response.uid = process.getuid();
    }
    return res.status(200).json(response);
});

app.get('/readiness', (req, res) => {
    return res.status(200).json({
        message: "Atividade 4 Docker",
        platform: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir(),
    });
});

app.get('/consulta-dados', (req, res) => {
    db.query('SELECT * FROM users;', (err, results) => {
        if (err) {
            console.error('Erro ao consultar dados:', err);
            res.status(500).send('Erro ao consultar dados.');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}/consulta-dados`);
});
