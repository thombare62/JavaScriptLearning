console.log(`Assignment No. 2: Differennt Array Operations \n`);
const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`The Array is: [${arrayNumber}]`);
console.log(`1] Total elements present in the Array are: "${arrayNumber.length}"`);
console.log(`2] The first element of Array is: "${ arrayNumber[0] }" and the last element of Array is: "${arrayNumber[arrayNumber.length-1]}" `);
console.log(`3] The third last element is: "${arrayNumber[arrayNumber.length-3]}"`);
const tempArray=[ ];
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%2==0)
    {
        tempArray.push(arrayNumber[index]);
    }    
}
console.log(`4] All even numbers in the Array are: "${tempArray}"`);
tempArray.splice(0);
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%2!==0)
    {
        tempArray.push(arrayNumber[index]);
    }    
}
console.log(`5] All odd numbers in the Array are: "${tempArray}"`);
const tempArray1=[ ];
for (let index = 0; index < arrayNumber.length; index++) {
    if(index%2==0)
    {
        tempArray1.push(arrayNumber[index]);
    }    
}
console.log(`6] All even position elements in the Array are: "${tempArray1}"`);
tempArray1.splice(0);
for (let index = 0; index < arrayNumber.length; index++) {
    if(index%2!==0)
    {
        tempArray1.push(arrayNumber[index]);
    }    
}
console.log(`7] All Odd Position Element in the Array are: "${tempArray1}"`);
let sum=0;
for (let index = 0; index < arrayNumber.length; index++) {
    sum=sum+arrayNumber[index];
    
}
console.log(`8] The sum Of all elements in the Array is: ${sum}`);
const multi5=[ ];
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%5==0)
    {
        multi5.push(arrayNumber[index]);
    }    
}
console.log(`9] The elements Which are multiple of 5 in the Array are: "${multi5}"`);
function availableNumber(num) {
    if(arrayNumber.indexOf(num)==-1)
    {
        return false;
    }
    else{
        return true;
    }
    
}
console.log(`10] Is number 115 available in ArrayNumber?  The answer is:${availableNumber(115)}`);
console.log(`11] Is number 23 available in ArrayNumber? The answer is: ${availableNumber(23)}`);
arrayNumber.splice(3,0,55,66);
console.log(`12] The new Array is adding "55" and "66": ${arrayNumber}`);
arrayNumber.splice(4,3);
console.log(`13] The new Array after deleting three elements starting From index 4: ${arrayNumber}`);