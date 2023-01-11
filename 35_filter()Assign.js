console.log(`===== Assignment: filter(); Method =====\n`);

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

const arrayOfEmployee = [
  emp_shekhar,
  emp_sagar,
  emp_yash,
  emp_shubham,
  emp_asmita,
  emp_damini,
  emp_kajal,
];
console.log(`Array of employess.`);
arrayOfEmployee.forEach((Employee) => {
  console.log(Employee);
});
console.log(
  `------------------------------------------------------------------------------------------------------`
);
console.log(`1. Objects with "TCS" using filter(); method`);
const arrayOfEmployees = [
  emp_shekhar,
  emp_sagar,
  emp_yash,
  emp_shubham,
  emp_asmita,
  emp_damini,
  emp_kajal,
];
const arrayFilterEmployee = arrayOfEmployees.filter((Employee) => {
  return Employee.emp_company == "TCS";
});
arrayFilterEmployee.forEach((Employee) => {
  console.log(
    `Employee name= ${Employee.emp_name}, Employee company= ${Employee.emp_company}`
  );
});
console.log(
  `------------------------------------------------------------------------------------------------------`
);
