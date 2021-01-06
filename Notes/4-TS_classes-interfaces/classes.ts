abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmpoyee(employee: string) {
    // this.id = 'D2';
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT DEPT:" + this.id);
  }
}

class Accounting extends Department {
  private lastReport: string;
  private static instance: Accounting;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid Value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (Accounting.instance) {
      return this.instance;
    }
    this.instance = new Accounting('ACC Inernam',[]);
    return this.instance;
  }

  describe() {
    console.log("Accouting Department - ID: " + this.id);
  }

  addEmpoyee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Static EMP");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("SUP1", ["Theo"]);


it.addEmpoyee("Theo");
it.addEmpoyee("Theo 2");

// obj.employees[2] = 'Theo 3';
// obj.name = 'NEW NAME'

it.describe();
it.printEmployeeInfo();

console.log(it);

//const acc = new Accounting("ACC1", []);
const acc = Accounting.getInstance();
const acc2 = Accounting.getInstance();
console.log(acc,acc2);
acc.mostRecentReport = "RR";
//console.log(acc.mostRecentReport);
acc.addReport("Something went wrong...");
console.log(acc.mostRecentReport);
acc.addEmpoyee("Max");
acc.addEmpoyee("TEST");

acc.describe();
// acc.printReports();
// acc.printEmployeeInfo();

// const objCopy = { name: "Some", describe: obj.describe };

// objCopy.describe();
