-- Database: locadora_db

-- DROP DATABASE IF EXISTS locadora_db;

CREATE DATABASE locadora_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE table usuario(
	id_	 SERIAL,
 	email_ varchar(50) not null unique,
	senha_ text not null
);

INSERT INTO USUARIO (email_,senha_)
VALUES ('anjosgui11@gmail.com','clubhouse');
SELECT * FROM usuario_db;

ALTER TABLE usuario_db ALTER COLUMN email_ TYPE varchar(100);



