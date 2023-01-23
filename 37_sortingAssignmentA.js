console.log(`===== Assignment A: Sorting =====\n`);

const array_roll_numbers=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is as follows:`);
console.log(array_roll_numbers);
console.log(`\n`);
var reverseArray= array_roll_numbers.reverse();
console.log(`1. Reversing the given array:`);
console.log(array_roll_numbers);
console.log(`----------------------------------------------------------`);
console.log(`2. Sorting the given array:`);
var sortArray= array_roll_numbers.sort();
console.log(sortArray);
console.log(`----------------------------------------------------------`);
console.log(`3. Sorting the given array using custom logic:`);
var sortingAscending= array_roll_numbers.sort((a, b)=>{
return a>b ? 1 : -1
})
console.log(sortingAscending);
console.log(`----------------------------------------------------------`);
console.log(`4. Finding greatest number from given array:`);
var grtNo= sortingAscending[sortingAscending.length-1]
console.log(`The greatest number from given array= "${grtNo}"`);
console.log(`----------------------------------------------------------`);
console.log(`5. Finding smallest number from given array:`);
var smallNo= sortingAscending[0]
console.log(`The smallest number from given array= "${smallNo}"`);
console.log(`----------------------------------------------------------`);
console.log(`6. Finding smallest number from given array:`);
console.log(`Array before removing duplicate elements`);
console.log(array_roll_numbers);
console.log(`Array after removing duplicate elements`);
var arrayWithoutDuplicate= [...new Set(array_roll_numbers)];
console.log(arrayWithoutDuplicate);
console.log(`----------------------------------------------------------`);
