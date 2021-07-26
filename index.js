const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const cTable = require("console.table");
const connection = require("./db/connection.js");

function quit() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "quit",
        message: "Would you like to perform another action?",
      },
    ])
    .then((result) => {
      // console.log(result);
      if (result.quit != true) {
        process.exit();
      } else {
        startMenu();
      }
    });
}

function viewDepartments() {
  connection.query(
    "SELECT * from `department`",
    function (err, results, fields) {
      const table = cTable.getTable(results);
      console.log(table);
    }
  );
}

function viewRoles() {
  connection.query(
    "SELECT * from `employee_role`",
    function (err, results, fields) {
      const table = cTable.getTable(results);
      console.log(table);
    }
  );
}

function viewEmployees() {
  connection.query(
    "SELECT * from `employees`",
    function (err, results, fields) {
      const table = cTable.getTable(results);
      console.log(table);
    }
  );
}

function addDepartment() {
  // viewDepartments();
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is your new department called?: ",
      },
    ])
    .then((result) => {
      // console.log(result.department);
      connection.execute(
        "INSERT INTO `department`(department_name) VALUES (?)",
        [result.department]
      );
      quit();
    });
}

function addRole() {
  viewRoles();
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title you'd like to add?: ",
      },
      {
        type: "number",
        name: "salary",
        message: "What is the salary for this title?: ",
      },
      {
        type: "number",
        name: "department",
        message: "Which department is this role associated with?: ",
      },
      // {
      //   type: "list",
      //   name: "department",
      //   message: "Which department is this role associated with?: ",
      //   choices:
      // }
    ])
    .then((result) => {
      // console.log(result.department);
      connection.execute(
        "INSERT INTO `employee_role`(title, salary, department_id) VALUES (?, ?, ?)",
        [result.title, result.salary, result.department]
      );
      quit();
    });
}

function addEmployee() {
  // viewEmployees();
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?: ",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?: ",
      },
      {
        type: "number",
        name: "role_id",
        message: "What is the employee's role ID?: ",
      },
      {
        type: "number",
        name: "manager_id",
        message: "If the emplyoee has a manager, what is their manager's id?: ",
      },
    ])
    .then((result) => {
      // console.log(result.department);
      connection.execute(
        "INSERT INTO `employees`(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [result.first_name, result.last_name, result.role_id, result.manager_id]
      );
      quit();
    });
}

async function updateEmployeeRole() {
  connection.query("SELECT * from `employees`", function (err, result, fields) {
    // console.log(result);
    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          message: "Choose the employee:",
          choices: result.map((item) => ({
            name: item.first_name + " " + item.last_name,
            value: item.id,
          })),
        },
      ])
      .then((result) => {
        console.log(result);
        let employee_id = result.employee;
        inquirer
          .prompt([
            {
              type: "number",
              message:
                "which role ID would you like the employee assigned to? :",
              name: "role_id",
            },
          ])
          .then((role) => {
            connection.execute(
              "UPDATE `employees` SET role_id = ? WHERE id = ?",
              [role.role_id, employee_id],
              function (err, results, fields) {
                if (err) throw err;
                // console.log(results);
              }
            );
            quit();
          });
      });
  });
}

function startMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "whatDo",
        message: "what would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          new inquirer.Separator(),
          "quit",
        ],
        default: 0,
      },
    ])
    .then((result) => {
      if (result.whatDo === "view all departments") {
        viewDepartments();
        quit();
      }
      if (result.whatDo === "view all roles") {
        viewRoles();
        quit();
      }
      if (result.whatDo === "view all employees") {
        viewEmployees();
        quit();
      }
      if (result.whatDo === "add a department") {
        addDepartment();
      }
      if (result.whatDo === "add a role") {
        addRole();
      }
      if (result.whatDo === "add an employee") {
        addEmployee();
      }
      if (result.whatDo === "update an employee role") {
        updateEmployeeRole();
      }
    });
}

startMenu();
