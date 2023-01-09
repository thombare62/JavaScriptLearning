console.log(`=====Assignment 01: Arrow Function=====\n`);
console.log(`1) Created arrow function with no argument and no return & logged task "a".`);
let arrowFun= ()=>console.log(`   "Good Morning, Today is Monday" `);arrowFun();
console.log(`---------------------------------------------------------------------------`);
console.log(`2) To perform multiplication.`);
let multiplication= (num1, num2, num3=1)=>{
console.log(`Output for Multiplication of ${num1}*${num2}*${num3}= ${num1*num2*num3}`);
}
multiplication(5, 5, 2);
multiplication(10, 4);
console.log(`---------------------------------------------------------------------------`);
console.log(`3) To perform Addition.`);
let addition= (val1, val2, val3, val4, val5)=>{
    console.log(`Addition of the given values= ${val1+val2+val3+val4+val5}`);
    }
    addition(100, 100, 200, 349, 756);
   addition("I am", " learning", " ES6", " features", " in depth.");
   console.log(`---------------------------------------------------------------------------`);