class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
    this.fullName = `${firstname} ${lastname}`;
    this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
  }
}

const emp1 = new Employee("John", "Smith");

console.log(emp1.fullName);
console.log(emp1.email);
