//hoisting

//errors for const and let,
// console.log(firstName);
// console.log(lastName);

moreComplex();
console.log(moreComplex);

const firstName = 'john';
let lastName = 'smith';
var random = 'random';

//typical approach, access after initialized
console.log(display);
display();
function display() {
  console.log('hello world');
}

//
function moreComplex() {
  console.log(`${random}`);
}
