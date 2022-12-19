var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligibility(20);
votingEligibility(89);
votingEligibility(1500);
votingEligibility(0);
