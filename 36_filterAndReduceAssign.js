console.log(`===== Assignment: filter(); & reduce(); Method =====\n`);

class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_shekhar = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_sagar = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_yash = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_shubham = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_asmita = new Employee(77, "Monika", "IT", 40000, "L&T");
const emp_damini = new Employee(88, "Vinayak", "IT", 75000, "Bajaj Finance");
const emp_kajal = new Employee(99, "Mahesh", "HR", 85000, "Wipro");

const arrayOfEmployee = [
  emp_shekhar,
  emp_sagar,
  emp_yash,
  emp_shubham,
  emp_asmita,
  emp_damini,
  emp_kajal,
];
console.log(`1. Finding all employees from "Wipro" company.`);
const arrayFilterEmployee = arrayOfEmployee.filter((Employee) => {
  return Employee.emp_company == "Wipro";
});
arrayFilterEmployee.forEach((value) => {
  console.log(value);
});
console.log(
  `------------------------------------------------------------------------------------------------------`
);
console.log(`2. Finding all employees from "IT" & "HR" department.`);
const arrayFilterIT = arrayOfEmployee.filter((value1) => {
  return value1.emp_dept == "IT";
});
arrayFilterIT.forEach((value1) => {
  console.log(value1);
});

const arrayFilterHR = arrayOfEmployee.filter((value1) => {
  return value1.emp_dept == "HR";
});
arrayFilterHR.forEach((value1) => {
  console.log(value1);
});

console.log(
  `------------------------------------------------------------------------------------------------------`
);

console.log(`3. Finding all employees whose employee ID >50.`);
const arrayEmpID = arrayOfEmployee.filter((value1) => {
  return value1.emp_id > 50;
});
arrayEmpID.forEach((value1) => {
  console.log(value1);
});

console.log(
  `------------------------------------------------------------------------------------------------------`
);

console.log(
  `4. Finding employees whose whose name starts with "A", "V" or "M".`
);
const arrayEmpName = arrayOfEmployee.filter((value1) => {
  return (
    value1.emp_name.startsWith("A") ||
    value1.emp_name.startsWith("V") ||
    value1.emp_name.startsWith("M")
  );
});
arrayEmpName.forEach((value1) => {
  console.log(value1);
});

console.log(
  `------------------------------------------------------------------------------------------------------`
);
console.log(`5. Finding average salary of all employees.`);
const result1 = arrayOfEmployee.reduce((runningTotal, value) => {
  return runningTotal + value.emp_salary;
}, 0);
console.log(`    Average salary= ${result1 / 7}`);
console.log(
  `------------------------------------------------------------------------------------------------------`
);
console.log(`6. Finding average salary of IT employees.`);
const result2 = arrayFilterIT.reduce((runningTotal, value) => {
  return runningTotal + value.emp_salary;
}, 0);
console.log(`   IT employees average salary= ${result2 / 3}`);
console.log(
  `------------------------------------------------------------------------------------------------------`
);
