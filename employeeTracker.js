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
                ["View all Employees",
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
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}

function addEmployee() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}

function updateRole() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}

function viewDepartments() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}

function addDepartment() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}

function viewRoles() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}

function addRole() {
    inquirer
        .prompt({
            name: "employees",
            type: "list",
            message: "What would you like to do?",
            choices:
                ["View all Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View all Departments",
                    "Add a Department",
                    "View all Roles",
                    "Add a Role",
                    "Exit"
                ]
        });
}