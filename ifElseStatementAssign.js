console.log(`====If Else Statement Assignment====`);
console.log(`______________________________________________________________`);
var votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Provided data:${age} is Invalid`);
    } else {
       console.log(`Provided data:${age} is Valid`); 

       if (age>=18) {
        console.log(`Congratulation you can vote as your age is: ${age}`);
       }else{
        console.log(`Sorry you are not eligible for vote as your age is: ${age}`);
       }
    } 
    
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`______________________________________________________________`);
console.log(`2) Grade system with various marks`);

var gradeCalculation = function(marks){
if (marks<=0 || marks>100) {
    console.log(`Provided data: ${marks} is Invalid`);
} else {console.log(`Provided data: ${marks} is valid`);
    if (marks>=90 && marks<100) {
        console.log(`Fantastic marks: ${marks}, your grade is A+.`);
    } 
    if(marks>=75 && marks<90) {
        console.log(`Excellent marks: ${marks}, your grade is A.`);
    }
    if(marks>=50 && marks<75){
        console.log(`Good marks: ${marks}, your grade is B.`);
    }
    if(marks>=35 && marks<50){
        console.log(`marks is: ${marks}, your grade is C, need improvement.`);
    }
    if(marks<=34 && marks>=1){
        console.log(`marks is: ${marks}, sorry, you are Failed, better luck for next time.`);
    }
}   
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);