CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    --INT to hold reference to department role belongs to--
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id),
    --INT to hold reference to role employee has--
    role_id INT,
    --INT to hold reference to another employee that manager of the current employee.--
    --This field may be null if the employee has no manager--
    manager_id INT
);


