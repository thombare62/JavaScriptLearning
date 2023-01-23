const arrayOfNames = ["Anuja", "Sonali", "Manoj", "Yogesh", "Bharat"];
console.log("==== reverse() === ");
arrayOfNames.reverse();
console.log(arrayOfNames);
console.log("==== sort() in ascending order === ");
arrayOfNames.sort();
console.log(arrayOfNames);
console.log("==== sort() in descending order === ");
arrayOfNames.reverse();
console.log(arrayOfNames);


const arrayOfNumbers = [23, 111, 5, 99, 32];
console.log("==== sort() array of numbers=== ");
// arrayOfNumbers.sort();
console.log(arrayOfNumbers);
arrayOfNumbers.sort((a, b)=>{
   return a>b ? 1 : -1;
});
console.log(arrayOfNumbers);
// Sort the array in descending order
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);


const arrayOfNums = [45, 888, 5, 99, 67]; // a = 45  b=888  a is greater 
arrayOfNums.sort((a,b)=>{
    return a>b ? -1 : 1; // 45-888 ==> -ve  ==> 99, 67  = 99-67 ==> +ve
});
console.log(arrayOfNums);



class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
 arrayOfVehicles.sort((vehicle1, vehicle2)=> {
    return vehicle1.price > vehicle2.price ? 1 : -1;
 });
 arrayOfVehicles.forEach((currentValue)=>{
    console.log(currentValue.company, currentValue.price);
 });
