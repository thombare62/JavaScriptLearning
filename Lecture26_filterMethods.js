const arrayOfNum = [0, 20, 3, 5, 6, 10];
 const arrayFilter =arrayOfNum.filter( (currentValue, index)=> {
    return currentValue > 5; // 0
 } );
 console.log(arrayFilter);
const arrayFilterEven =arrayOfNum.filter( (currentValue, index)=> {
    return currentValue%2==0; // 0
 } );
 class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
console.log(`==========FILTERING FROM OBJECT==========`);
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

console.log("====== Filter out vehicles whose prices are greater than 200000=======");
 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
 const arrayFilterVehicle = arrayOfVehicles.filter( (vehicle) =>{
    return vehicle.price > 200000;
 } );
 arrayFilterVehicle.forEach( (element) => {
console.log(element.company, element.price);
 } );
