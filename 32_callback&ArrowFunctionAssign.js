console.log(`=====Assignment 02: Arrow Function & Callback=====\n`);
console.log(`---------------------------------------------------------------------------`);
console.log(`1. Logging array element with its index.`);
const array_numbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_numbers.forEach( (currentValue, index) => {
    console.log(`Given element= ${currentValue} & its Index= ${index}`);
});
console.log(`---------------------------------------------------------------------------`);

const arrayOfPositiveNos = [];
array_numbers.forEach( (currentValue) => {
    if(currentValue>0) {
        arrayOfPositiveNos.push(currentValue);
     
    }
});
console.log("2. Array of positive numbers is as follows:");
console.log(arrayOfPositiveNos);
console.log(`---------------------------------------------------------------------------`);
const arrayOfNegativeNos = [];
array_numbers.forEach( (currentValue) => {
    if(currentValue<0) {
        arrayOfNegativeNos.push(currentValue);
      
    }
});
console.log("3. Array of negative numbers is as follows:");
console.log(arrayOfNegativeNos);
console.log(`---------------------------------------------------------------------------`);
const arrayOfEven = [];
array_numbers.forEach( (currentValue) => {
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
      
    }
});
console.log("4. Array of even numbers is as follows:");
console.log(arrayOfEven);
console.log(`---------------------------------------------------------------------------`);
let sum = 0;
array_numbers.forEach( (currentValue,index )=> {
    if (index < array_numbers.length) {
        sum = sum + currentValue; 
       
    }
} )
console.log(`5. Sum of all elements from array_numbers= ${sum}`);
console.log(`---------------------------------------------------------------------------`);
const arrayOfEvenIndex = [];
array_numbers.forEach( (currentValue, index) => {
    if(index%2==0) {
        arrayOfEvenIndex.push(currentValue);
      
    }
});
console.log("6. Array of even positioned array values is as follows:");
console.log(arrayOfEvenIndex);





