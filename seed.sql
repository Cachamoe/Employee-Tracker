-- Data for department table --
INSERT INTO department (name) values 
('Management'),
('Human Resources'),
('Sales'),
('Accounting'),
('Product Oversight'),
('Reception'),
('Warehouse'),
('Temp');

-- Data for role table --
INSERT INTO role (title, salary, department_id) values 
('Regional Manager', 75000, 1),
('Sales', 55000, 3),
('Secretary', 45000, 6),
('Assistant Regional Manager', 60000, 3),
('Lead Accountant', 60000, 4),
('Accountant', 55000, 4),
('Quality Control', 50000, 5),
('Receptionist', 45000, 6),
('Sales', 52000, 3),
('Sales', 55000, 3),
('Human Relations', 60000, 2),
('Temp', 25000, 8),
('Customer Relations', 47000, 2),
('Warehouse', 40000, 7),
('Sales', 55000, 3),
('Lead Accountant', 60000, 4),
('Supplier Relations', 58000, 5);

-- Data for employee table --
INSERT INTO employee (first_name, last_name, role_id) values 
('Michael', 'Scott', 1), 
('Jim', 'Halpert', 2), 
('Pam', 'Beesly', 3), 
('Dwight', 'Schrute', 4), 
('Angela', 'Martin', 5),
('Kevin', 'Malone', 6),
('Creed', 'Bratton', 7),
('Erin', 'Hannon', 8),
('Andy', 'Bernard', 9),
('Stanley', 'Hudson', 10),
('Toby', 'Flenderson', 11),
('Ryan', 'Howard', 12),
('Kelly', 'Kapoor', 13),
('Darryl', 'Philbin', 14),
('Phyllis', 'Vance', 15),
('Oscar', 'Martinez', 16),
('Meredith', 'Palmer', 17);

-- Set Managers --
UPDATE employee SET manager_id = 2 WHERE id = 1;
UPDATE employee SET manager_id = 3 WHERE id = 4;
UPDATE employee SET manager_id = 12 WHERE id = 11;



