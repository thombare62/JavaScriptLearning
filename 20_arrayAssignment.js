console.log(`Assignment No. 1: Differennt Array Operations \n`);

const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`## The given Array is: [${fruits_seasonal}]`);
console.log(`1] The first element of Array is: "${ fruits_seasonal[0] }" and the last element of Array is: "${fruits_seasonal[fruits_seasonal.length-1]}" `);
fruits_seasonal.unshift("Papaya");
let fruits=fruits_seasonal;
console.log(`2] The  Array after adding Papaya is: [${fruits}]`);
let index=fruits_seasonal.indexOf("Mango");
 fruits_seasonal.splice(index,1);
fruits=fruits_seasonal;
console.log(`3] The Array after removing Mango is: [${fruits}]`);
fruits_seasonal.push("Pineapple");
fruits=fruits_seasonal;
console.log(`4] The Array after adding Pineapple is: [${fruits}]`);
 index=fruits_seasonal.indexOf("Water Melon");
fruits_seasonal.splice(index,0,"Dragon Fruit");
fruits=fruits_seasonal;
console.log(`5] The Array after adding Dragon Fruit before "Water Melon is: [${fruits}]`);
index=fruits_seasonal.indexOf("Orange");
fruits_seasonal.splice(index,1,"Kiwi");
fruits=fruits_seasonal;
console.log(`6] The Array after replacing Orange with Kiwi is: [${fruits}]`);
console.log(`7] The Array from index 1 to 4 is: [${fruits_seasonal.slice(1,5)}]`);
console.log(`8] The last three elements are is: [${fruits_seasonal.slice(fruits_seasonal.length3)}]`);