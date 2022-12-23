console.log(`==== Assignment: Control Flow Statements ====`);
console.log(`______________________________________________________________`);
console.log(`1) Vowels count in the given string:`);
function getVowels(string) {
  var Vowels = "aAeEiIoOuU";
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (Vowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  console.log(`The total Vowel count in given string is:${vowelsCount}`);
}
getVowels("I am very good IT Developer");
console.log(`______________________________________________________________`);
console.log(`2) Finding sum of cubes`);

var cubeNumber = function (num1) {
  var sum=0;
  for (let index = 1; index <= num1; index++) {
    sum = sum+(index*index*index)
    
  }
console.log(`The sum of cubes from 1 to ${num1} is= ${sum}`);
}
cubeNumber(5);
console.log(`______________________________________________________________`);
console.log(`3) Finding odd positioned Characters`);

var oddPositionedChar = function (string) {
  var stringLength=string.length
  var newStr = ""
  for (let index = 0; index < stringLength; index++) {
    if (index%2==1) {
      oddChar = string.charAt(index);
      newStr = newStr.concat(oddChar);
      newStr = newStr.split("").join("")
    }
  }
  console.log(`The given string is= "${string}"`);
  console.log(`Odd positioned characters without considering space is= "${newStr}"`);
}
oddPositionedChar("Hard work always pays back");
oddPositionedChar("Soon i will be Angular IT champ");