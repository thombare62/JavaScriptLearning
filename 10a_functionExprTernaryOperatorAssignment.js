console.log(`-----Assignment No: 01 (Function Expression with Ternary Operator)-----`);

function TCSInterviewEligibility(gradScore, hscScore, sscScore, candidateName){

    var InterviewResult= (gradScore>="70%" && hscScore>="80%" && sscScore>="90%" ) ? "Congrats you are eligible for interview." : " Unfortunately you are not eligible for interview.";
    console.log( `${candidateName}, ${InterviewResult}`);
}
TCSInterviewEligibility("80%", "86%", "90%","Chandrashekhar" );
TCSInterviewEligibility("70%", "65%", "55%","Sagar");
TCSInterviewEligibility("60%", "79%", "88%","Shubham");

