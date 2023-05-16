# Employee Tracker

## Table of Contents
1. [How to use](#howtouse)
2. [Description](#description)
3. [User Story](#userstory)
4. [Acceptance Criteria](#acceptancecriteria)
5. [Usage](#usage)
6. [Installation](#installation)
7. [Video Demo](#videodemo)
8. [GitHub](#github)


## How to use
1) Download files onto local machine
2) Install all dependencies using NPM
3) Set up database through MYSQL Workbench
4) Import schema and initial seed into MYSQL Workbench
5) Run node index.js on a CLI
6) Follow prompts 


## Description
This program creates a database where the user can process CRUD actions. They will be able to create employees, departments,and roles as well as view existing ones in the database. The user will also be able to maintain the database by updating or deleting the departments, employees, or roles. Using a CLI, the user can easily make changes and receive instant feedback.


## User Story
```md
User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```md
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation
A user may fork, or clone this repo. 
```md
To run this application:
1. Open a new terminal and cd into the file path
2. Install inquirer with "npm install inquirer"
3. Install mysql with "npm install mysql"
4. Install dotenv with "npm install dotenv"
5. Update any SQL user names or passwords, by creating a .env file
6. Run "node index.js"
7. Complete all prompts
```
## Video Demo

## Git Hub
[employee-tracker](https://github.com/JasonDeLine/employee-tracker)

