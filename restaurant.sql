
/* 1.Crear Base de datos */
create database restaurant;

use restaurant;

/* 2. Crear Tabla */
CREATE TABLE menu (
    name_of_the_dish varchar(255) NOT NULL ,
    price float,
    created_date DATETIME NOT NULL,
    modified_date DATETIME NOT NULL  
);

/* 3. Insertar Valores */
INSERT INTO menu (name_of_the_dish, price, created_date, modified_date) VALUES ('Arroz con Pollo', 8.50, now(), now());

INSERT INTO menu (name_of_the_dish, price, created_date, modified_date) VALUES ('Lomo Saltado', 10.00, now(), now());

INSERT INTO menu (name_of_the_dish, price, created_date, modified_date) VALUES ('Tallarin Verde', 9.00, now(), now());


/* Ver valores de la tabla 
SELECT name_of_the_dish, price, created_date, modified_date
FROM menu;
*/