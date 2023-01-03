console.log(``);
class Bank{
    constructor(bankName,location, accountNo,ifsc,interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
let axisBank = new Bank("AXIS BANK","Pune",458596872315,"AXISB8569","5%")
let sbiBank = new Bank("SBI BANK","Mumbai",5986239874,"SBIB9874","6%")
let iciciBank = new Bank("ICIICI BANK","Banglore",852963456789,"ICICIB8952","6.5%")
let kotakBank = new Bank("KOTAK BANK","Surat",852398567854,"KOTAKB5623","5.5%")
let hdfcBank = new Bank("HDFC BANK","Nagpur",25639874145296,"HDFCB8912","6.5%")
let panjabBank = new Bank("PANJAB BANK","Thane",562378128963,"PANJABB9856","6%")


console.log(`###. After adding all object elements in array---`);
const arr = [axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];
 for (const iterator of arr) {
 console.log(`Bank Name: ${iterator.bankName} & its Location: ${iterator.location}`);
 }

 console.log(``);
console.log(`###. Object with name - kotak bank`);
// // let result = {};
// // for (let index = 0; index < arr.length; index++) {
// //     if (arr[index] === kotakBank) {
// //         result = {...arr[index]};       
// //     }  
// // }
// // console.log(result);
// // console.log(``);
for (const iterator of arr) {
    if(iterator === kotakBank){
        console.log(iterator);
    }
}
console.log(``);

console.log(`###. All deatils of class Bank`);
 for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
    console.log(element);
}