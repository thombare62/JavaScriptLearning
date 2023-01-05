console.log(`====Assignment: Map hands on====`);
console.log(``);
class Bank {
  constructor(bankName, location, accountNo, ifscCode, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNo = accountNo;
    this.ifscCode = ifscCode;
    this.interestRate = interestRate;
  }
}
let axisBank = new Bank("Axis Bank", "Jejuri", 123456789, "AXIS00000786", "6%");
let sbiBank = new Bank(
  "SBI Bank",
  "Morgaon",
  1231564789,
  "SBIB00006192",
  "12.55%"
);
let iciciBank = new Bank(
  "ICICI Bank",
  "Masalwadi",
  14678656789,
  "ICIC00004444",
  "16%"
);
let kotakBank = new Bank(
  "Kotak Bank",
  "Baramati",
  77845632789,
  "KOTK00000808",
  "7.9%"
);
let hdfcBank = new Bank(
  "HDFC Bank",
  "Baramati",
  7845632789,
  "HDFC00007508",
  "10%"
);
let punjabBank = new Bank(
  "Punjab Bank",
  "Baramati",
  75486321456,
  "PUNJ00004158",
  "7.75%"
);

const mapOfBank = new Map(); // Creating an Map
mapOfBank.set(123456789, axisBank); // Adding element in key value pair
mapOfBank.set(1231564789, sbiBank);
mapOfBank.set(14678656789, iciciBank);
mapOfBank.set(77845632789, kotakBank);
mapOfBank.set(7845632789, hdfcBank);
mapOfBank.set(75486321456, punjabBank);

console.log(
  `c] Created a map with key "Account No." & value as "bank detail objects".`
);
console.log(`Keys for the given map are:`);
const keysOfBank = mapOfBank.keys();
console.log(keysOfBank);

console.log(`Values for the given map are:`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);
console.log(``);

console.log(
  `D] Traversing the map with bankName, accountNo and interstRate for each object`
);

for (const iterator of keysOfBank) {
  const element = mapOfBank.get(iterator);
  console.log(element.bankName, element.accountNo, element.interestRate);
}
