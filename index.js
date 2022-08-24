class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
    this.fullName = `${firstname} ${lastname}`;
    this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
  }
}

const employee = new Employee("John", "Smith");

console.log(employee);
