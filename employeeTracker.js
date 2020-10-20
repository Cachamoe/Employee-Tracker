const mysql = require("mysql");
const inquirer = require("inquirer");

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
    start();
});

// Function for starting application
function start() {
    inquirer
        .prompt({
            name: "",
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
                ]
        })
        .then(function (answer) {
            if (answer.choices[0]) {
                viewEmployees();
            }
            else if (answer.choices[1]) {
                addEmployee();
            }
            else if (answer.choices[2]) {
                updateRole();
            }
            else if (answer.choices[3]) {
                viewDepartments();
            }
            else if (answer.choices[4]) {
                addDepartment();
            }
            else if (answer.choices[5]) {
                viewRoles();
            }
            else if (answer.choices[6]) {
                addRole();
            }
            else {
                connection.end();
            }
        });
}