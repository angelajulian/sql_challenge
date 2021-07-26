INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Smith', 1, NULL), 
    ('Katie', 'Golden', 2, NULL),
    ('Allie', 'Fischer', 3, NULL), 
    ('Cody', 'Johnston', 4, NULL),
    ('Johnathan', 'Harris', 5, NULL), 
    ('Katie', 'Schtoll', 6, NULL),
    ('Robert', 'Evans', 7, NULL), 
    ('Trisha', 'Golden', 8, NULL),
    ('Persona', 'Nongrata', 1, NULL), 
    ('Tran', 'Ng', 2, NULL),
    ('Ororo', 'Monroe', 3, NULL), 
    ('Grannie', 'Gorgeous', 4, NULL)
    ; 

INSERT INTO department (department_name) 
VALUES
    ('hr'), 
    ('engineering'),
    ('product'),
    ('design'),
    ('janitorial'), 
    ('secretarial'),
    ('customer service'),
    ('banking'); 

INSERT INTO employee_role (title, salary, department_id)
VALUES 
    ('product manager', 100000.50, 3),
    ('hr manager', 90000.50, 1),
    ('principal engineer', 150000.50, 2),
    ('ux designer', 120000.50, 4),
    ('janitor', 300000.50, 5),
    ('personal assistant', 140000.50, 6),
    ('customer service associate', 150000.50, 7),
    ('banking manager', 50000.50, 8),
    ('personal banker', 10000.50, 8); 
    