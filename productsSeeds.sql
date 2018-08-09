DROP DATABASE IF EXISTS productsDB;

CREATE DATABASE productsDB;

USE productsDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  current_bid DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, current_bid)
VALUES ("North Face Jacket", 150.00);

INSERT INTO products (name, current_bid)
VALUES ("BMW", 500000.00);

INSERT INTO products (name, current_bid)
VALUES ("PS4", 399.00);

SELECT * FROM products;