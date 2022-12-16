function maleMarriageEligibility(gender, age, boyName){

    var maleResult= (gender="Male" && age>=21) ? "Eligible for marriage." : "Not eligible for marriage.";
    console.log( `Hey ${boyName} you are ${maleResult}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");
