CREATE TABLE review(
id int(11) NOT NULL AUTO_INCREMENT,
apresentacao CHAR(1) NOT NULL,
variedade CHAR(1) NOT NULL, 
saborDaRefeicao CHAR(1) NOT NULL,
saborDoSuco CHAR(1) NOT NULL,
saborDaSobremesa CHAR(1) NOT NULL,
temperaturaDoAlimento CHAR(1) NOT NULL,
atendimento CHAR(1) NOT NULL,
higiene CHAR(1) NOT NULL,
temperaturaDoAmbiente CHAR(1) NOT NULL,
tempoDeEspera CHAR(1) NOT NULL,
idUsuario VARCHAR(7) NOT NULL,

PRIMARY KEY (id)
)ENGINE=INNODB;