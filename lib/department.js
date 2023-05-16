const connection = require('../db/connection');

class Department {
  constructor() {}

  getAllDepartments() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM department', (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  addDepartment(department) {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO department (name) VALUES (?)',
        [department],
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );
    });
  }
}

module.exports = Department;
