console.log(`==== For Loop Assignment ====`);
console.log(`===== 1] To print numbers from 5 to 15 incrementing by 1 =====`);
console.log(`______________________________________________________________`);

function forLoopOne(index) {
  var index;
  for (let index = 5; index <= 15; index++) {
    console.log(index);
  }
}
forLoopOne();
console.log(`______________________________________________________________`);
console.log(`===== 2] To print numbers from 50 to 40 decrementing by 1 =====`);
console.log(`______________________________________________________________`);

function forLoopTwo(index) {
  var index;
  for (let index = 50; index >= 40; index--) {
    console.log(index);
  }
}
forLoopTwo();
console.log(`______________________________________________________________`);
console.log(`===== 3] To find First 15 ODD numbers =====`);
console.log(`______________________________________________________________`);

function forLoopOdd(index) {
  var index;
  for (let index = 1; index < 31; index++) {
    if (index % 2 != 0) {
      console.log(index);
    }
  }
}
forLoopOdd();
console.log(`______________________________________________________________`);
console.log(`===== 4] To find First 10 EVEN numbers =====`);
console.log(`______________________________________________________________`);

function forLoopEven(index) {
  var index;
  for (let index = 1; index < 22; index++) {
    if (index % 2 == 0) {
      console.log(index);
    }
  }
}
forLoopEven();
console.log(`______________________________________________________________`);
console.log(`===== 5] For Table of 5 =====`);
console.log(`______________________________________________________________`);

function forLoopTable(index) {
  var index;
  for (let index = 1; index <= 10; index++) {
    console.log(index * 5);
  }
}
forLoopTable();
console.log(`______________________________________________________________`);
console.log(`===== 6] For Table of 10 =====`);
console.log(`______________________________________________________________`);

function loopTable(index) {
  var index;
  for (let index = 1; index <= 10; index++) {
    console.log(index * 10);
  }
}
loopTable();
console.log(`______________________________________________________________`);
console.log(`===== 7] Reverse Table of 10 =====`);
console.log(`______________________________________________________________`);

function loopTable2(index) {
  var index;
  for (let index = 100; index >= 10; index = index - 10) {
    console.log(index);
  }
}
loopTable2();
