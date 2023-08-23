//closure

function newAccount(name, intialBalance) {
  let balance = intialBalance;
  function showBalance() {
    console.log(`Hello ${name}, your balance is : $${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`insufficent funds ${name}`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit, withdraw };
}

//instances
const john = newAccount('john', 300);
const tim = newAccount('tim', 1400);

john.showBalance();
john.deposit(100);
john.withdraw(500);
tim.showBalance();

console.log(john);
