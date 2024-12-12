class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}`);
        } else {
            console.log("Insufficient funds!");
        }
    }

    getBalance() {
        return this.balance;
    }
}

// Example usage
const myAccount = new BankAccount(123456, 500);
myAccount.deposit(200);
myAccount.withdraw(100);
console.log(`Current Balance: ${myAccount.getBalance()}`);