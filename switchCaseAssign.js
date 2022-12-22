console.log(`====Switch Case Assignment====`);
console.log(`______________________________________________________________`);
function monthOfYear(monthNumber) {
    
    switch (monthNumber) {
        case 1: 
            console.log(`For month value: ${monthNumber}: the month is "January"`);
            break;
        case 2:
            console.log(`For month value: ${monthNumber}: the month is "February"`);
            break;
        case 3:
            console.log(`For month value: ${monthNumber}: the month is "March"`);
            break;
        case 4:
            console.log(`For month value: ${monthNumber}: the month is "April"`);
            break;
        case 5:
            console.log(`For month value: ${monthNumber}: the month is "May"`);
            break;
        case 6:
            console.log(`For month value: ${monthNumber}: the month is "June"`);
            break;
        case 7:
            console.log(`For month value: ${monthNumber}: the month is "July"`);
            break;
        case 8:
            console.log(`For month value: ${monthNumber}: the month is "August"`);
            break;
        case 9:
            console.log(`For month value: ${monthNumber}: the month is "September"`);
            break;
        case 10:
            console.log(`For month value: ${monthNumber}: the month is "October"`);
            break;
        case 11:
            console.log(`For month value: ${monthNumber}: the month is "November"`);
            break;
        case 12:
            console.log(`For month value: ${monthNumber}: the month is "December"`);
            break;
        
        default:
            console.log(`For month value: ${monthNumber} : "Invalid month number, please enter a valid month number"`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);