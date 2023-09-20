-- CREATE TABLE `users` (                                                                
--           `id` int(11) NOT NULL AUTO_INCREMENT,                                               
--           `nome` varchar(255) NOT NULL,                                                       
--           `email` varchar(255) NOT NULL,                                                      
--           `senha` varchar(255) NOT NULL,                                                      
--           PRIMARY KEY (`id`)                                                                  
--         ) ENGINE=InnoDB;

DROP TABLE users;
CREATE TABLE `users` (                                                               
    `id` int(11) NOT NULL AUTO_INCREMENT,                                              
    `nome` varchar(255) NOT NULL,                                                      
    `email` varchar(255) NOT NULL,                                                     
    `senha` varchar(255) NOT NULL,                                                     
    `token` varchar(500) DEFAULT NULL,                                                 
    `VinculoAoIfes` varchar(5) DEFAULT NULL,                                           
    `cafeDaManha` varchar(4) DEFAULT NULL,                                             
    `almoco` varchar(4) DEFAULT NULL,                                                  
    `lancheDaTarde` varchar(4) DEFAULT NULL,                                           
    `jantar` varchar(4) DEFAULT NULL,                                                  
    `vegetariano` varchar(4) DEFAULT NULL,                                             
    PRIMARY KEY (`id`)                                                                 
) ENGINE=InnoDB;

SELECT * FROM users;