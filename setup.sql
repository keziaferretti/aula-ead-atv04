USE db_aula;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email  VARCHAR(255) NOT NULL
);

INSERT INTO users (nome, email) VALUES ('Kezia', 'kezia@gmail.com'), ('Maria', 'maria@gmail.com'), ('Pedro', 'pedrinho@outlook.com');