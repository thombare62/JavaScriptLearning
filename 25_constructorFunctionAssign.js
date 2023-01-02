console.log(`====Assignment: Constructor Function==== \n`);
function Bank (bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
let yesBank = new Bank("Yes Bank", "Masalwadi", "YESB00004444", 2331);
let sbiBank = new Bank("SBI Bank", "Morgaon", "SBIB00006192", 1212);
let mahBank = new Bank("Bank of Maharashtra", "Baramati", "MAHB00000808", 7745);
let axisBank = new Bank("Axis Bank", "Jejuri","AXIS00000786",6252);
console.log(`\n`);
console.log(`Bank Details are--> Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);
console.log(`\n`);
console.log(`Bank Details are--> Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);
console.log(`\n`);
console.log(`Bank Details are--> Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC Code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`);
console.log(`\n`);
console.log(`Bank Details are--> Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);
console.log(`\n`);
console.log(`The opening time of this SBI bank branch is: ${sbiBank.openTime} & the closing time is: ${sbiBank.closeTime} `);
console.log(`\n`);
console.log(`For the "${axisBank.bankName}", the closing time is: ${axisBank.closeTime}`);
console.log(`\n`);
console.log(`For the "${yesBank.bankName}",with branch code: ${yesBank.branchCode} the opening time is: ${yesBank.openTime}`);