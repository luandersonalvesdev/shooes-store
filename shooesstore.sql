USE shooesstore;

CREATE TABLE employee (
  id_employee INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

CREATE TABLE customer (
  id_customer INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(15)
);

CREATE TABLE brand (
	id_brand INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE shooe (
	id_shooe INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  id_brand INT,
  cost DECIMAL(7,2) NOT NULL,
  FOREIGN KEY (id_brand) REFERENCES brand(id_brand)
);

CREATE TABLE sale (
	id_sale INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL,
  seconds_duration INT NOT NULL,
  id_employee INT,
  id_customer INT,
  id_shooe INT,
  date_sale DATETIME,
  FOREIGN KEY (id_employee) REFERENCES employee(id_employee),
  FOREIGN KEY (id_customer) REFERENCES customer(id_customer),
  FOREIGN KEY (id_shooe) REFERENCES shooe(id_shooe)
);