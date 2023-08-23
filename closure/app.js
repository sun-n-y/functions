// closure
// closure gives you access to an outer functions scopes from an inner function
//make private vairbales with closures

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello the secret is :${privateVar}`);
  }
  return inner;
  inner();
}
//cant do this
// console.log(privateVar);

outer()();

const value = outer();
console.log(value);
value();
