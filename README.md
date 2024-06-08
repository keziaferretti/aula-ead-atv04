# Node.js MySQL App

## Passos para executar a aplicação

### 1. Executar o banco de dados MySQL


docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=passwd -e MYSQL_DATABASE=db_aula mysql/mysql-server:latest

### 2. Criar a tabela e inserir no banco de dados

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email  VARCHAR(255) NOT NULL
);

INSERT INTO users (nome, email) VALUES ('João', 'joao@gmail.com'), ('Maria', 'maria@gmail.com'), ('Pedro', 'pedrinho@outlook.com');


### 3. Executar a aplicação Node.js

docker run -p 3000:3000 --name node-mysql-app -d COLOCAR_USUARIO-docker-hub/node-mysql-app:latest
