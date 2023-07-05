//closure bsic example

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name} your balance is $${balance}`);
  }
  return showBalance;
}

newAccount('tom', 77)();

const john = newAccount('john', 88);
const will = newAccount('will', 99);

john();
will();
