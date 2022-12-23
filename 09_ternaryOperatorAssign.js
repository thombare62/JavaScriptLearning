var operator=function(num1, num2){

    var num1, num2;
    var greatestNo = num1 > num2 ? num1 : num2;
    console.log( `Greatest Number between ${num1} & ${num2} is ${greatestNo}`);
}
operator(10, -10);
operator(800, 899);

var evenOdd = function(number){

    var checkNumber=number%2==0 ? "Even Number or True" : "Odd Number or False";
    console.log( `Given Number ${number} is ${checkNumber}` );
    return checkNumber;

}
var result=evenOdd(29);
var result=evenOdd(44);
var result=evenOdd(0);
var result=evenOdd(101);

   var wordEvenOdd = function(value){

        var lengthOfWord=value.length %2==0 ? "Even" : "Odd";
        console.log( `Length of ${value} is ${lengthOfWord}`);
        return lengthOfWord;
    }
    var showResult=wordEvenOdd("JavaScript");
    var showResult=wordEvenOdd("Developer");
    var showResult=wordEvenOdd("Google");