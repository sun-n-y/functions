//closure

function showBalance(name, amount) {
  let intialBalance = amount;
  console.log(`Hello, ${name}, your current balance is: $${intialBalance}`);
  function deposit(amount) {
    intialBalance += amount;
    console.log(`Hello, ${name}, your current balance is: $${intialBalance}`);
  }
  function withdraw() {
    intialBalance -= amount;
    console.log(`Hello, ${name}, your current balance is: $${intialBalance}`);
  }
  return { deposit, withdraw };
}

const tim = showBalance('tim', 44);

console.log(tim);

tim.withdraw(44);
