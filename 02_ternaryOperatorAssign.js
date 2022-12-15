function maleMarriageEligibility(gender, age, boyName){

    var maleResult= (gender="Male" && age>=21) ? "Eligible for marriage." : "Not eligible for marriage.";
    console.log( `Hey ${boyName} you are ${maleResult}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

function femaleMarriageEligibility(gender, age, girlName){

    var femaleResult= (gender="Female" && age>=18) ? "Eligible for Marriage." : "Not eligible for marriage.";
    console.log( `Hey ${girlName} you are ${femaleResult}`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");