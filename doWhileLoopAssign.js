console.log(`==== While & Do While loop Assignment====`);
console.log(`===== 1] While Loop to print Numbers from 5 to 15 by Incrementing 1 =====`);
console.log(`______________________________________________________________`);
var i=5;                
while (i<=15) {         
    console.log(i); 
    i++;                
}
console.log(`______________________________________________________________`);
console.log(`===== 2] While Loop to print numbers from 50 to 40 by Decrementing 1 =====`);
console.log(`______________________________________________________________`);
var a=50;               
while (a>=40) {         
    console.log(a);     
    a--;               
}
console.log(`______________________________________________________________`);
console.log(`===== 3] While Loop to find 15 first ODD Numbers =====`);
console.log(`______________________________________________________________`);
var b=1;
var counter=0;
while (b<=100) {
    if (b%2!=0) {
        console.log(b);        
        counter=counter+1;
    }
    if (counter==15) {
        break;
    }
    b++;
}  
console.log(`Total no of ODD numbers : ${counter}`);
console.log(`______________________________________________________________`);
console.log(`===== 4] While Loop to find 10 first EVEN Numbers =====`);
console.log(`______________________________________________________________`);
var d=1;
var counter=0;
while (d<=100) {
    if (d%2==0) {
        console.log(d);        
        counter=counter+1;
    }
    if (counter==10) {
        break;
    }
    d++;
}  
console.log(`Total no of EVEN numbers : ${counter}`);
console.log(`______________________________________________________________`);
console.log(`===== 5] Do While Loop to print table of 5 =====`);
console.log(`______________________________________________________________`);
var i=5;
do {
 console.log(i);
 i=i+5;    
} while (i<=50);
console.log(`______________________________________________________________`);
console.log(`===== 6] Do While Loop to print table of 10 =====`);
console.log(`______________________________________________________________`);
var a=10;
do {
    console.log(a);
    a=a+10;
} while (a<=100);
console.log(`______________________________________________________________`);
console.log(`===== 7] Do While Loop to print table of reverse 10 =====`);
console.log(`______________________________________________________________`);
var num=100;
var count=0;
do {
    console.log(num);
    num=num-10;

} while (num>=10);