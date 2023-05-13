USE employees_db;

INSERT INTO department (name) VALUES
    ('Scranton Branch'),
    ('Corporate'),
    ('Parks and Recreation'),
    ('Accounting'),
    ('Sales');

INSERT INTO job_role (title, income, department_id) VALUES
    ('Regional Manager', 75000.00, 1),
    ('Assistant to the Regional Manager', 45000.00, 1),
    ('Sales Representative', 60000.00, 5),
    ('Accountant', 55000.00, 4),
    ('Controller', 85000.00, 4),
    ('CEO', 150000.00, 2),
    ('Assistant', 40000.00, 2),
    ('Director', 90000.00, 3),
    ('Parks Director', 80000.00, 3),
    ('Deputy Director', 70000.00, 3),
    ('Secretary', 35000.00, 3);

INSERT INTO employee_info (first_name, last_name, position_id, manager_id) VALUES
    ('Michael', 'Scott', 1, NULL),
    ('Dwight', 'Schrute', 2, 1),
    ('Jim', 'Halpert', 2, 1),
    ('Pam', 'Beesly', 2, 1),
    ('Andy', 'Bernard', 3, 1),
    ('Angela', 'Martin', 4, 1),
    ('Kevin', 'Malone', 4, 1),
    ('Oscar', 'Martinez', 4, 1),
    ('Toby', 'Flenderson', 11, 7),
    ('Jan', 'Levinson', 6, NULL),
    ('David', 'Wallace', 6, NULL),
    ('Leslie', 'Knope', 9, NULL),
    ('Ron', 'Swanson', 10, 9),
    ('Tom', 'Haverford', 8, 9),
    ('April', 'Ludgate', 8, 10),
    ('Jerry', 'Gergich', 8, 10),
    ('Ann', 'Perkins', 7, 9),
    ('Chris', 'Traeger', 7, 9);