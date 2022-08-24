class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
  }
  fullName(fName, lName) {
    this.firstname = fName;
    this.lastname = lName;

    console.log(`${fName} ${lName}`);
  }
  email(fName, lName) {
    this.firstname = fName;
    this.lastname = lName;

    console.log(`${fName}.${lName}@company.com`);
  }
}

const employee = new Employee();

employee.fullName("Thilina", "Punchihewage");
employee.email("Thilina", "Punchihewage");
