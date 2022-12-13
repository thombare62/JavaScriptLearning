stringHandsOn =function (){

    var string="  Hey you are doing Good, keep it up    ";
    console.log(`1  Given string is : ${string} \n`);

    var stringCount=string.length;
    console.log(`2  The length of given String is : ${stringCount}\n`);

    var removeSpace=string.trim();
    console.log(`3  After removing all extra spaces, resulted string is : ${removeSpace} \n`);

    var extraSpaceCount=stringCount-removeSpace.length;
    console.log(`4 Total count of Extra Spaces is : `, extraSpaceCount,"\n");    

    console.log(`5  First character after Trim is : `,removeSpace.charAt(0), `and Last Character after Trim is :`,removeSpace.charAt(removeSpace.length-1),"\n");
        
    var splitCount=removeSpace.split(" ");
    console.log(`6  Total word count after removing all spaces is : `,splitCount.length,"\n");

    console.log(`7  Index of word "Good" is : `,removeSpace.indexOf("Good"),"\n");

    console.log(`8  Substring starting from Index 22 using subString is :`, string.substring(22));
    console.log(`8  Substring strating from Index 22 using slice is : `, string.slice(22),"\n");

    console.log(`9 Check string ends with word "up" is : `, removeSpace.endsWith("up"),"\n");

    console.log(`10  Check string starts with word "Hey" is : `, removeSpace.startsWith("Hey"));
}
stringHandsOn();