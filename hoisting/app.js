//hoisting = to raise something
//functions and var declarations are hoisted
//with var, you can access the declaration but not the value,however not that useful
//...its best to access only after initialized..can be done before but not recommended

console.log(random);
moreComplex();
const firstName = 'john';
let lastName = 'doe';
var random = 'random';

//functions is hoisted in background, so even if it looks like its being invoked before its being declared it works
display();

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(`${random}`);
}
