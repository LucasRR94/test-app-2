CREATE DATABASE credfit;
   
CREATE TABLE IF NOT EXISTS empresa(
    id  SERIAL PRIMARY KEY,
    cnpj VARCHAR(18) NOT NULL UNIQUE,
    razao_social VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS usuario(
    id SERIAL PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    empresa_id INT, -- this can be null, in the case of the user do not have a company
    cpf VARCHAR(14) NOT NULL UNIQUE,
    e_mail VARCHAR(255) NOT NULL UNIQUE,
    hash_senha VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    score INT NOT NULL CHECK(score BETWEEN 0 AND 1000),
    FOREIGN KEY (empresa_id) REFERENCES empresa(id)
);

CREATE TABLE IF NOT EXISTS representante_empresa(
    usuario_id INT NOT NULL,
    empresa_id INT NOT NULL, 
    PRIMARY KEY (usuario_id, empresa_id),
    FOREIGN KEY(empresa_id) REFERENCES empresa(id),
    FOREIGN KEY(usuario_id) REFERENCES usuario(id)
);



CREATE TABLE IF NOT EXISTS credito(
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    score INT NOT NULL CHECK(score BETWEEN 0 AND 1000),
    salario_usuario DECIMAL(10,2) NOT NULL,
    valor_disponivel  DECIMAL(10,2) NOT NULL DEFAULT 0.0,
    numero_de_parcelas INT NOT NULL DEFAULT 0 CHECK(numero_de_parcelas BETWEEN 0 AND 4),
    FOREIGN KEY (usuario_id) references usuario(id)
);



CREATE TABLE IF NOT EXISTS solicitacao_credito(
    id SERIAL PRIMARY KEY,
    usuario_solicitante INT NOT NULL,
    credito_id INT DEFAULT NULL,
    data_analise DATE,
    data_solicitacao DATE,
    FOREIGN KEY (usuario_solicitante) references usuario(id),
    FOREIGN KEY (credito_id) references credito(id)
);
-- pago é se a parcela foi paga
-- atrasado a data atual é superior a data de vencimento e ainda não consta pagamento
-- pendente a data de vencimento ainda não é inferior a data atual e não consta pagamento
CREATE TABLE IF NOT EXISTS parcela(
    id SERIAL PRIMARY KEY,
    numero_parcela INT NOT NULL DEFAULT 0 CHECK (numero_parcela BETWEEN 0 AND 4),
    status_parcela VARCHAR(255) NOT NULL default 'pendente', -- pago, atrasado, pendente
    credito_id INT,
    usuario_id INT,
    data_vencimento DATE NOT NULL,
    FOREIGN KEY (credito_id) references credito(id),
    FOREIGN KEY (usuario_id) references usuario(id)
);


--test data

INSERT INTO empresa(id,cnpj,razao_social) values(1,'03.239.365/0001-61','Empresa da esquina ltda');
INSERT INTO usuario(id,nome_completo,empresa_id,cpf,e_mail,hash_senha,salt,salario,score) values(1,'Luan Junior',1,'256.162.750-00','algumacoisa@exemplo.com','1d396a9623d389c3b315164c192f24cb5e2d67f75bc05697c08322e45d8abfa9','',1000.00,400);
INSERT INTO usuario(id,nome_completo,empresa_id,cpf,e_mail,hash_senha,salt,salario,score) values(2,'Carlos Mazer',1,'253.162.720-00','algumacoisa1@exemplo.com','4e396a9623d389c3b315164c192f24cb5e2d67f75bc05617c08322e41d8abfa9','',10000.00,200);
INSERT INTO representante_empresa(usuario_id,empresa_id) values(1,1);
INSERT INTO solicitacao_credito(id,usuario_solicitante,credito_id,data_analise,data_solicitacao) values(1,1,null,'04/05/2024','03/05/2024');
INSERT INTO solicitacao_credito(id,usuario_solicitante,credito_id,data_analise,data_solicitacao) values(2,1,null,'04/06/2024','05/06/2024');
INSERT INTO credito(id,usuario_id,score,salario_usuario,valor_disponivel,numero_de_parcelas) values(1,1,400,1000.00,200.00,2);
update solicitacao_credito set credito_id=1 where id=2;
INSERT INTO parcela(id,numero_parcela,status_parcela,credito_id,usuario_id,data_vencimento) values(1,1,'pago',1,1,'02/07/2024');
INSERT INTO parcela(id,numero_parcela,status_parcela,credito_id,usuario_id,data_vencimento) values(2,2,'pendente',1,1,'02/08/2024');