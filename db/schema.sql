DROP DATABASE IF EXISTS daycare_db;
-- Creates the "daycare_db" database --
CREATE DATABASE daycare_db;

-- Makes it so all of the following code will affect daycare_db --
USE daycare_db;

-- Creates the table "parents" within daycare_db --
CREATE TABLE Parents (

id INT NOT NULL AUTO_INCREMENT,

username VARCHAR(30) NOT NULL,

password VARCHAR(30) NOT NULL,

first_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "last_name" which cannot contain null --
last_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
-- spouse_id int null,
  -- Makes a string column called "number of children" which cannot contain null --
email VARCHAR(60) NULL,
  -- Makes a string column called "street" which cannot contain null --
street VARCHAR(50) NOT NULL,
  -- Makes a string column called "city" which cannot contain null --
city VARCHAR(40) NOT NULL,
  -- Makes a string column called "state" which cannot contain null (GA is default state) --
state CHAR(2) NOT NULL DEFAULT "GA",
  -- Makes a numeric column for "zip code" which cannot contain null --
zip MEDIUMINT UNSIGNED NOT NULL,
  -- Makes a numeric column called "phone" which cannot contain null --
phone VARCHAR(30) NOT NULL,
-- Makes a string column called "emergency contact" which cannot contain null --
emergency_name VARCHAR(30) NULL,
-- Makes a numeric column called "emergency phone number" which cannot contain null --
emergency_phnum VARCHAR(30) NULL,
date_entered TIMESTAMP,

PRIMARY KEY (id)

);

CREATE TABLE children (
child_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Makes a string column called "first_name" which cannot contain null --
first_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "last_name" which cannot contain null --
last_name VARCHAR(30) NOT NULL,
  -- Makes a date column called "birth day" which cannot contain null --
birth_date DATE NOT NULL,
  -- Makes a string column called "sex of child" which cannot contain null --
sex ENUM('M', 'F') NOT NULL,
  -- Makes a string column called "parent ID" which cannot contain null --
parent1_id VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "allergies" which cannot contain null --
-- parent2_id VARCHAR(30) NULL,
  -- Makes a boolean column called "allergies" which cannot contain null --
allergies ENUM('Y', 'N') NOT NULL,
  -- Makes a string column called "allergy1" which can contain null --
allergy1 VARCHAR(30)  NULL,
  -- Makes a string column called "allergy2" which can contain null --
allergy2 VARCHAR(30)  NULL,
  -- Makes a boolean column called "checked in" which cannot contain null --
checked_in BOOLEAN NOT NULL DEFAULT true,
date_added TIMESTAMP
);

