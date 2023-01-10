console.log(`=====Assignment 0A: Use only forEach=====\n`);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_shekhar = new Employee(22, "Shekhar", "IT", 50000, "TCS");
const emp_sagar = new Employee(10, "Sagar", "HR", 74000, "Wipro");
const emp_yash = new Employee(26, "Yashwant", "Finance", 47000, "TCS");
const emp_shubham = new Employee(20, "Shubham", "Finance", 45000, "Infosys");
const emp_asmita = new Employee(08, "Asmita", "IT", 40000, "L&T");
const emp_damini = new Employee(32, "Damini", "IT", 75000, "Bajaj Finance");
const emp_kajal = new Employee(14, "Kajal", "HR", 85000, "Airtel");
console.log(`1. To find out TCS employee details:`);
const arrayOfEmployee = [
  emp_shekhar,
  emp_sagar,
  emp_yash,
  emp_shubham,
  emp_asmita,
  emp_damini,
  emp_kajal,
];
arrayOfEmployee.forEach((Employee) => {
  if (Employee.emp_company == "TCS") {
    console.log(
      `Name of the employee: ${Employee.emp_name} and company name: ${Employee.emp_company}`
    );
  }
});
console.log(
  `---------------------------------------------------------------------------------------------------------`
);
console.log(`2. To find employees with salary >=50000:`);
arrayOfEmployee.forEach((Employee) => {
  if (Employee.emp_salary >= 50000) {
    console.log(
      `Employee ID= ${Employee.emp_id}, Name= ${Employee.emp_name}, Department= ${Employee.emp_dept}, Salary= ${Employee.emp_salary}, Company= ${Employee.emp_company}`
    );
  }
});

console.log(
  `---------------------------------------------------------------------------------------------------------`
);

let sum = 0;
arrayOfEmployee.forEach((Employee) => {
  sum = sum + Employee.emp_salary;
});
console.log(`3. Sum of all employees salary= ${sum}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
console.log(`4. Average Salary of all employees= ${sum / 7}`);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);
console.log(`5. To find IT or HR department employees with salary >=75000:`);
const arrayOfEmployee1 = [
  emp_shekhar,
  emp_sagar,
  emp_yash,
  emp_shubham,
  emp_asmita,
  emp_damini,
  emp_kajal,
];
arrayOfEmployee1.forEach((Employee) => {
  if (
    (Employee.emp_dept == "IT" || Employee.emp_dept == "HR") &&
    Employee.emp_salary >= 75000
  ) {
    console.log(
      `Employee ID= ${Employee.emp_id}, Name= ${Employee.emp_name}, Department= ${Employee.emp_dept}, Salary= ${Employee.emp_salary}, Company= ${Employee.emp_company}`
    );
  }
});
