console.log(`====Assignment: Class Objects==== \n`);
console.log(`1] Defining class Vehicle. `);
console.log(``);
class Vehicle{
    constructor(brandName,topSpeed, engineCc, fuelType, color, milege, wheelType, ){
        this.brandName = brandName;
        this.topSpeed =topSpeed;
        this.engineCc = engineCc;
        this.fuelType = fuelType;
        this.color = color;
        this.milege  = milege ;
        this.wheelType = wheelType;
        
    }
}
let bike = new Vehicle("Honda Unicorn","150kmph", "160cc", "Petrol", "Silver Black","60 KMPL","2 wheeler",);
let sedan = new Vehicle("Hundai Verna","200kmph","1600cc", "Diesel", "Pearl White","21 KMPL","4 wheeler",);
let suv = new Vehicle("Mahindra Thar","150kph","1800cc", "Petrol", "Black","8 KMPL","4 wheeler",);
let truck = new Vehicle("Ashok Leyland","120kmph","2000cc", "Diesel", "Brown","4 KMPL","12 wheeler",);
let rikshaw = new Vehicle("Bharat Forge","70kmph","320cc", "CNG Gas", "Black","18 KMPL","3 wheeler",);
console.log(bike);
console.log(sedan);
console.log(suv);
console.log(truck);
console.log(rikshaw);
console.log(`2] Define class College.`);
class College{
    constructor(clgName, university, clgLocation, chairman, numberOfDept){
        this.clgName = clgName;
        this.affiliatedUniversity = university
        this.clgLocation = clgLocation;
        this.chairman = chairman;
        this.numberOfDept = numberOfDept;
    }
    collegeDetails(){
        console.log(this.clgName,  this.affiliatedUniversity, this.clgLocation,this.chairman,this.numberOfDept);
    }

}
let csmit = new College("CSMIT College", "Mumbai University", "Panvel","Dr. Manoj Tiwari","5 Departments");
let vjti = new College("VJTI","Autonomous", "Mumbai","Dr. Salunkhe","10 Departments");
let sarswati = new College("Sarswati College of Engineering", "Mumbai University", "Kharghar","Dr. Shekhar Gore","3 Departments");
let coep = new College("COEP", "Autonomous", "Pune","Dr. Sachin Tendulkar","9 Departments");
csmit.collegeDetails();
vjti.collegeDetails();
sarswati.collegeDetails();
coep.collegeDetails();
console.log(``);

console.log(`3] Traversing object using for in loop `);
console.log(``);
function traverseObject(value){
    for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
            const element = value[key];
            console.log(`${key} : ${element}`);
        }   
        
    }
}
traverseObject(csmit);
console.log(``);
traverseObject(vjti);
console.log(``);
traverseObject(sarswati);
console.log(``);
traverseObject(coep);