CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    department_name VARCHAR(30) 
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT NOT NULL, 
    PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER NOT NULL,
    manager_id INTEGER 
); 

CREATE TABLE employee_role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(12, 2),
    department_id INTEGER  
);

