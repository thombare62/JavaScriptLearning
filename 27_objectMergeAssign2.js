console.log(`====Assignment 02: Object Merging====\n`);
const car = {
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
}

const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}

console.log(`1] Merging with object.assign() method`);
Object.assign(car,carEngine);
console.log(`Details of car are: `);
console.log(car);
console.log(`\n`);
console.log(`2] Merging with spread operator`);
let mergObject = {...car,...carEngine};
console.log(`Details of car are: `);
console.log(mergObject);