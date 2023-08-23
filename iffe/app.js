//iife immediatley invoked function expression
//iiffe is an older approach - modules are used nowadays
//simple approach to avoid global scope pollution
//i.e. good way at protecting the scope of your function and the vairables within it

//normal setup,
const num1 = 30;
const num2 = 50;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}

add();

//iiffe setup,name not needed,variables inside cannot be accessed outisde
(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

//pass in args
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(500, 500);

//return and assign to variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 500);

console.log(result);
