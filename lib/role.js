const connection = require("../db/connection");

class Role {
  constructor(id, title, salary, department_id) {
    this.id = id;
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT r.id, r.title, r.salary, d.name AS department_name
        FROM role AS r
        INNER JOIN department AS d ON r.department_id = d.id
      `;
      connection.query(query, (err, rows) => {
        if (err) reject(err);
        const roles = rows.map(row => new Role(row.id, row.title, row.salary, row.department_name));
        resolve(roles);
      });
    });
  }

  static create(role) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?)
      `;
      const params = [role.title, role.salary, role.department_id];
      connection.query(query, params, (err, result) => {
        if (err) reject(err);
        const createdRole = new Role(result.insertId, role.title, role.salary, role.department_id);
        resolve(createdRole);
      });
    });
  }
}

module.exports = Role;
