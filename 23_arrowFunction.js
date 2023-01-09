console.log(`Arrow function with no argument and no return value`);

let show = ()=>{
    console.log("Hello");
}
show();
// => function Syntax
// let fun = ()=>{

// };
// Arrow Function with argument 
let sum = (n1, n2)=>{
    console.log(n1+n2);
}
sum(10, 10);

// Arrow Function with argument and return value
let multiply = (n1, n2)=> {
    let mul = n1*n2;
    return mul;
}
let mulResult = multiply(5, 5);
console.log(mulResult);
const arrayNumbers= [10, 3, 4, 50, 6];
arrayNumbers.forEach(function(currentValue, index, array){
 console.log(currentValue, index, array);
});

arrayNumbers.forEach(function(currentValue){
    console.log(currentValue);
   });

arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue);
});

arrayNumbers.forEach(currentValue=>console.log(currentValue));


console.log("======== Find even numbers==========");
const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
const arrayOfEven = [];
console.log(array);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
      console.log(currentValue);
    }
});
console.log("Array of even numbers");
console.log(arrayOfEven);
