var num1 = 10;
var num2 = "10";
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof '100');

var result = num1==num2 ? "Equal" : "Not Equal";
console.log(`num1==num2==> ${result}`);

var res = num1===num2 ? "Equal" : "Not Equal";
console.log(`num1===num2==> ${res}`);

// If SSC marks greater than equal to 35 then pass or fail

var sscMarks = 39;
var resultPassOrFail= sscMarks>=35 ? "Pass"  : "Fail";

 console.log(`Result is ${resultPassOrFail}`);

 var sscResult = function(sscMarks){ 
    // var resultPassOrFail= (sscMarks>=35 && !(sscMarks>100)) ? "Pass"  : "Fail";
    // var resultPassOrFail= (sscMarks>=35 && sscMarks<100) ? "Pass"  : "Fail";
    var resultPassOrFail= (sscMarks < 0 || sscMarks > 100 ) 
        ? "In valid Data" 
        : (sscMarks>35 ? "Pass" : "Fail"); 
    return resultPassOrFail;
 }

console.log(`Result is 23  ${sscResult(23)}`);// Valid Value
console.log(`Result is 45  ${sscResult(45)}`);// Valid Value
console.log(`Result is 65  ${sscResult(65)}`);// Valid Value

console.log(`Result is 1200 ${sscResult(1200)}`); // Invalid value
console.log(`Result is "Ten" ${sscResult("Ten")}`); // Invalid value
console.log(`Result is -10 ${sscResult(-10)}`); // Invalid value
console.log(`Result is null ${sscResult(null)}`); // Invalid value
console.log(`Result is undefined ${sscResult(undefined)}`); // Invalid value



