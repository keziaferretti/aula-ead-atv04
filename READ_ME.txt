
Instalação das dependencias.

npm install express mysql

para excução do projeto
node index.js

no navegador, cole http://localhost:3030/consulta-dados

Criar Build e Imagem no docker
docker build -t node-mysql-app .

Execução

docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=root -e MYSQL_PASSWORD=passwd -e MYSQL_DATABASE=db_aula mysql/mysql-server:latest

Copie o arquivo setup.sql para o contêiner MySQL:
docker cp setup.sql mysql:/setup.sql

Criar a Tabela e Inserir os Dados

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email  VARCHAR(255) NOT NULL
);

INSERT INTO users (nome, email) VALUES ('Kezia', 'kezia@gmail.com'), ('Maria', 'maria@gmail.com'), ('Pedro', 'pedrinho@outlook.com');

Execute o arquivo SQL dentro do contêiner:
docker exec -it mysql bash

Dentro do shell do contêiner:

docker exec -it mysql mysql -uroot -p1234 db_aula < /setup.sql

Ainda dentro do contêiner:
mysql -uroot -p1234
USE db_aula;
SELECT * FROM users;


Links

GitHub: https://github.com/keziaferretti/aula-ead-atv04.git
Docker Hub: 