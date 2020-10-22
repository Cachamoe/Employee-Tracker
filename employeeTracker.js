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
    inquirer
        .prompt({
            name: "employees",
            type: "input",
            message: "What would you like to do?",
            choices:
                [

                ]
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?"
            }
        ]).then(function (answer) {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                }
            );
        });
    startApp();
}

function updateRole() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                [

                ]
        });
    startApp();
}

function viewDepartments() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                [

                ]
        });
    startApp();
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
            );
        });
    startApp();
}

function viewRoles() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                [

                ]
        });
    startApp();
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
                },
            );
        });
    startApp();
}