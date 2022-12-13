
var square = function (number){
    var result=number*number;
    console.log("   The Square of ",number, " is ",result);

}
square(5);
square(6);
square(25);
square(100);

var funType=typeof square;
console.log("   Type of the variable is : ",funType);

var rectArea=function (value1, value2){
    var result=value1*value2;
    console.log("   The area of given Rectangle is : ",result);
}
rectArea(499, 917);

var swapValues=function(value1,value2){

    console.log("   Values before swap ",value1, value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("   Values after  swap ",value1, value2);
    
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

var string=function(){
    var stringCount="JS the most popular language";
    var count=stringCount.length;
    console.log("   The given string is : JS the most popular language");
    console.log("   A)Total length of ",stringCount,"is : ", count);
    console.log("   B) Character at Index 6  is : ",stringCount.charAt(6));
    console.log("   C) Character as Index 11 is : ",stringCount.charAt(11));
    console.log("   D) Last character using Lenth property is : ", stringCount.charAt(count-1));
    console.log("   E) Vefy first character from the given string is : ",stringCount.charAt(0));
    console.log("   F) Length of given string is : ",count, "and square of", count, "is", count*count);
}
string();