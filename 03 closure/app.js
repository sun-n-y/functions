//closure

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there secret is: ${privateVar}`);
  }
  return inner;
  inner();
}

// console.log(privateVar);

outer()();

//from outer we returned the inner function
const value = outer();

value();
