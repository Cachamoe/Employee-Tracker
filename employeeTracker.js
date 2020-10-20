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