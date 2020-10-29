const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");


// Create the connection information for the sql database
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "employeeTracker_db",
    multipleStatements: true
});


// Connect to mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    startApp();
});


// Function for starting application
function startApp() {
    console.log("\n Welcome to the Employee Manager! \n");
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

function getRoles() {
    connection.query("SElECT * FROM role")
}

function getManager() {
    connection.query("SELECT * FROM employee")
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
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices:
                [
                    getRoles(),
                ]
            },
            {
                name: "manager",
                type: "list",
                message: "Who is the employee's manager?",
                choices: 
                [
                    getManager(),
                    "None",
                ]
            },
        ]).then(function (answer) {
            connection.query("INSERT INTO employee SET ?",
                [ 
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role: answer.role,
                        manager: answer.manager
                        
                    },
                ],
            )
            startApp();
        });
}


function updateRole() {
    inquirer
    .prompt([
        {
            name: "id",
            type: "input",
            message: "What is the employee's current role id?"
        },
        {
            name: "title",
            type: "list",
            message: "What is the employee's new role?",
            choices:
            [
                getRoles(),
            ]
        },
        {
            name: "salary",
            type: "input",
            message: "What is the employee's new salary?"
        }
    ]).then(function (answer) {  
        connection.query("UPDATE role SET title = ?, salary = ? WHERE id = ?",
            [
                answer.title,
                answer.salary,
                answer.id,
            ], 
            function (err) {
                startApp();
            }
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