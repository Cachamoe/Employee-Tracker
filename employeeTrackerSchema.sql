CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    --INT to hold reference to department role belongs to--
    department_id INT 
);

CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    --INT to hold reference to role employee has--
    role_id INT,
    --INT to hold reference to another employee that manager of the current employee.--
    --This field may be null if the employee has no manager--
    manager_id INT
);


