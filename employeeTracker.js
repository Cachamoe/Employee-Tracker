const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Create the connection information for the sql database
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "employeeTracker_db"
});

// Connect to mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    startApp();
});

// Function for starting application
function startApp() {
    inquirer
        .prompt({
            name: "business",
            type: "list",
            message: "What would you like to do?",
            choices:
                [
                    "View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        })
        .then(function (answer) {
            if (answer.business === "View all Employees") {
                viewEmployees();
            }
            else if (answer.business === "Add Employee") {
                addEmployee();
            }
            else if (answer.business === "Update Employee Role") {
                updateRole();
            }
            else if (answer.business === "View all Departments") {
                viewDepartments();
            }
            else if (answer.business === "Add a Department") {
                addDepartment();
            }
            else if (answer.business === "View all Roles") {
                viewRoles();
            }
            else if (answer.business === "Add a Role") {
                addRole();
            }
            else {
                connection.end();
            }
        });
}

function viewEmployees() {
    let query = `
    SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name department, CONCAT (employee2.first_name, " ", employee2.last_name) manager
    FROM employee
    LEFT JOIN role
        ON employee.role_id = role.id
    LEFT JOIN department
        ON role.department_id = department.id
    LEFT JOIN employee employee2
        ON employee2.manager_id = employee.id
        `;
    connection.query(query, function (err, res) {
        console.log("\n\n")
        console.table(res)
        startApp();
    });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?",
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?",
            },
            {
                name: "title",
                type: "list",
                message: "What is the employee's title?",
                choices:
                    [
                        "Regional Manager",
                        "Assistant Regional Manager",
                        "Human Relations",
                        "Lead Accountant",
                        "Accountant",
                        "Sales",
                        "Quality Control",
                        "Customer Relations",
                        "Supplier Relations",
                        "Secretary",
                        "Receptionist",
                        "Warehouse",
                        "Temp"
                    ]
            },
            {
                name: "salary",
                type: "input",
                message: "What is the employee's salary?",
            },
            {
                name: "department",
                type: "list",
                message: "What is the employee's department?",
                choices:
                    [
                        "Management",
                        "Human Resources",
                        "Sales",
                        "Accounting",
                        "Product Oversight",
                        "Reception",
                        "Warehouse",
                        "Temp"
                    ]
            },
        ]).then(function (answer) {
            connection.query(
                [
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                    },
                    "INSERT INTO role SET ?",
                    {
                        title: answer.title,
                        salary: answer.salary,
                    },
                    "INSERT INTO department SET ?",
                    {
                        department: answer.department,
                    },
                ]);
            startApp();
        });
}

function updateRole() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: "What is role you would like to update?",
                choices:
                    [

                    ]
            },
        ]).then(function (answer) {
            connection.query(
                (
                    "UPDATE FROM role ?",
                    {
                        title: answer.title,
                        last_name: answer.lastName,
                    },
                    function (err) {
                        startApp();
                    }
                )
            );
        });
}

function viewDepartments() {
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        console.log("\n\n")
        console.table(res)
        startApp();
    });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                name: "departmentName",
                type: "input",
                message: "What is the new department?"
            }
        ]).then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.departmentName,
                }
                , function (err) {
                    startApp();
                }
            );
        });
}

function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        console.log("\n\n")
        console.table(res)
        startApp();
    });
}

function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the role title?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the role salary?"
            }
        ]).then(function (answer) {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                }
                , function (err) {
                    startApp();
                }
            );
        });
}