console.log(`==== Assignment: To count character "a" or "A" ====`);
console.log(`______________________________________________________________`);

function countCharA(string1) {
    
    var counter=0;
    for (let index = 0; index < string1.length; index++) {
        
        var char=string1.charAt(index);
        if (char=="A" || char=="a") {
           
            counter=counter+1;
            }
        
    }
    console.log(`The given string is : "${string1}"`);
    console.log(`Total Count of "A" & "a" in the given string is: ${counter}`);
}
countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My favourite movie is LAggAn");