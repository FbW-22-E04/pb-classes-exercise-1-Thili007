class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Complete the code!
  }
  fullName(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;

    console.log(`${fName} ${lName}`);
  }
  email(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;

    console.log(`${fName}.${lName}@company.com`);
  }
}

const employee = new Employee();

employee.fullName("John", "Smith");
employee.email("John", "Smith");
