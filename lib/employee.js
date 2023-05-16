class Employee {
  constructor(id, firstName, lastName, roleId, managerId) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }

  // Getter methods for each property
  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getRoleId() {
    return this.roleId;
  }

  getManagerId() {
    return this.managerId;
  }

  // Setter methods for each property
  setId(id) {
    this.id = id;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setRoleId(roleId) {
    this.roleId = roleId;
  }

  setManagerId(managerId) {
    this.managerId = managerId;
  }

  // Returns an object representation of the employee
  getEmployeeData() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      roleId: this.roleId,
      managerId: this.managerId
    };
  }
}

module.exports = Employee;
