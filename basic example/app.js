//closure

function newAccount(name, intialBalance) {
  let balance = intialBalance;
  function showBalance() {
    console.log(`Hello ${name}, your balance is : $${balance}`);
  }
  return showBalance;
}

//instances
newAccount('steve', 77)();

const john = newAccount('john', 300);
const tim = newAccount('tim', 1400);

john();
tim();
