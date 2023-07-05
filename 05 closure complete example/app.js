//closure basic example

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name} your balance is $${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey ${name}, sorry not enoug funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw, withdraw };
}

const john = newAccount('john', 88);
const will = newAccount('will', 99);

john.showBalance();
john.deposit(400);
john.deposit(400);
john.withdraw(889);
will.showBalance();
