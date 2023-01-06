// Higher Order Function -
function anotherFunction() {
  console.log("I am inside another function....");
}
function show(myNumber) {
  // myNumber is an argument
  myNumber();
  let innerFunction = function () {
    console.log("Inner function.....");
  };
  return innerFunction;
}
let inner = show(anotherFunction);
inner();
