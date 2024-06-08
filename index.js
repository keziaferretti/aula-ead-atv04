const express = require('express');
const mysql = require('mysql2')

const app = express();
const port = 3030;

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
