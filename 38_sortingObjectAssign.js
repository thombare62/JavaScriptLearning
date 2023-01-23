console.log(`===== Assignment B: Sorting =====\n`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;}}
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "L&T");
  const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "Bajaj Finance");
  const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Wipro");
  
  const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];
console.log(`1. Sorting employees in ascending order according to their Employee ID`);
  arrayOfEmployee.sort((emp1, emp2)=>{
return emp1.emp_id>emp2.emp_id ? 1 : -1 
})
  arrayOfEmployee.forEach((currentValue)=>{
   console.log(`ID= ${ currentValue.emp_id}, Name= ${currentValue.emp_name}, Department= ${currentValue.emp_dept}`);
})
console.log(`----------------------------------------------------------`);
console.log(`2. Sorting employees in ascending order according to their Department`);
arrayOfEmployee.sort((emp1, emp2)=>{
    return emp1.emp_dept>emp2.emp_dept ? 1 : -1 
    })
      arrayOfEmployee.forEach((currentValue)=>{
       console.log(`Department= ${currentValue.emp_dept}, ID= ${currentValue.emp_id}, Company= ${currentValue.emp_company}`);
    })
console.log(`----------------------------------------------------------`);
console.log(`3. Sorting employees in descending order according to their Salary`);
arrayOfEmployee.sort((emp1, emp2)=>{
    return emp1.emp_salary>emp2.emp_salary ? -1 : 1 
    })
      arrayOfEmployee.forEach((currentValue)=>{
       console.log(`Salary= ${currentValue.emp_salary}, Name= ${currentValue.emp_name}, Company= ${currentValue.emp_company}`);
    })
console.log(`----------------------------------------------------------`);