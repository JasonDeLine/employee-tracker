const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

const query = `
  SELECT ei.id, ei.first_name, ei.last_name, jr.title, d.name AS department, jr.income, CONCAT(eim.first_name, ' ', eim.last_name) AS manager
  FROM employee_info ei
  LEFT JOIN job_role jr ON ei.position_id = jr.id
  LEFT JOIN department d ON jr.department_id = d.id
  LEFT JOIN employee_info eim ON eim.id = ei.manager_id
  WHERE ei.manager_id = ?`;

module.exports = connection;
