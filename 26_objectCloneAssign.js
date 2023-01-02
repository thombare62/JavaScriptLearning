console.log(`====Assignment 01: Object Clonning====`);
console.log(`1] Shallow clonning example \n`);
const arrayNums = [20, 3, 4, 56,90, 400, 49];
console.log(`Given Array: `);
console.log(arrayNums);
let arrayFirst = arrayNums;
arrayFirst.push(55,66);
console.log(`After shallow clone, Original Array is: `);
console.log(arrayNums);
console.log(`After shallow clone, Cloned Array is: `);
console.log(arrayFirst);
console.log(`2] Deep clonning example \n`);
console.log(`After deep clone, Original Array is: `);
console.log(arrayNums);
let arraySecond = [...arrayNums];
arraySecond.push(10,25);
console.log(`After deep clone, Cloned Array is: `);
console.log(arraySecond);
console.log(`3] Merging of an array example \n`);
const arrayEven =[2, 30, 14, 8];
console.log(`Given other array is: `);
console.log(arrayEven);
let mergedArray = [ ...arrayEven,...arrayNums];
console.log(`Array after merged with arrayOfNums `);
console.log(mergedArray);
console.log(`5] Employee details: \n`);
const employee_info ={
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokali, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8688 3456 88", "1800- 4567 32", "+91-9096 5678 77"]
}
let colony = employee_info.address.locality.colony;
let street = employee_info.address.locality.street;
let city = employee_info.address.city;
let state = employee_info.address.state;
let country = employee_info.address.country;
console.log(`${employee_info.emp_name}'s Address is: ${colony}, ${street}, ${city}, ${state}, ${country}`);
let mobile = employee_info. mobiles;
console.log(`${employee_info.emp_name}'s Mobile Numbers are: ${ mobile}`);
console.log(`6] Deep copy example \n`);
let julySal = employee_info.salary.july_month;
console.log(`${employee_info.emp_name}'s 'july_month' salary is: ${julySal}`);
let upJulySal = employee_info.salary.july_month = "80K";
console.log(`${employee_info.emp_name}'s updated salary of 'july_month' is: ${upJulySal}`);
console.log(`${employee_info.emp_name}'s country is: ${country}`);
let upCountry = employee_info.address.country = "United Kingdom";
console.log(`${employee_info.emp_name}'s updated country is: ${upCountry}`);