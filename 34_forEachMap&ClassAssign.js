console.log(`=====Assignment 0B: Traversing map using forEach loop=====\n`);

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

let mapOfEmployees = new Map();
mapOfEmployees.set(emp_shekhar,"1===>" );
mapOfEmployees.set(emp_sagar, "2===>" );
mapOfEmployees.set(emp_yash, "3===>");
mapOfEmployees.set(emp_shubham, "4===>");
mapOfEmployees.set(emp_asmita, "5===>" );
mapOfEmployees.set( emp_damini, "6===>");
mapOfEmployees.set(emp_kajal, "7===>" );
mapOfEmployees.forEach((key, value) => {
  console.log(`${key}, Employee name= ${value.emp_name}, Employee Department= ${value.emp_dept}, Employee salary= ${value.emp_salary}, Employee company= ${value.emp_company}`);
});
console.log(
  `---------------------------------------------------------------------------------------------------------`
);
