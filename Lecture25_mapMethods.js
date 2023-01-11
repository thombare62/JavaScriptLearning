console.log("=======map()=============");
const arrayOfNumber = [0, 2, 3, 5, 6];
// [ 10,  12, 13, 15, 16 ]
const arrayTransform = arrayOfNumber.map((currentValue)=>{
    return currentValue+10; // 0+10  2+10 
});
console.log(arrayTransform);

const arrayOfSquare =arrayOfNumber.map((currentValue)=>{ // 0 
    return currentValue * currentValue; // 4
});
console.log(arrayOfSquare);

const arrayOfSquare1 =arrayOfNumber.map(currentValue =>  currentValue * currentValue);
console.log(arrayOfSquare);
console.log(`===========ARRAY VALUE +INDEX `);

const arrayOfNum = [0, 2, 3, 5, 6]; // [ 0, 3, 5, 8, 10]
 const arrayWith = arrayOfNum.map((value, index )=> {
    return value + index;
 });
