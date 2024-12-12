function getClothingRecommendation(temp) {
    if (temp < 10) {
        return "Wear a heavy coat";
    } else if (temp >= 10 && temp <= 20) {
        return "Wear a jacket";
    } else {
        return "Wear a t-shirt";
    }
}

function sumEvenNumbers() {
    let sum = 0;
    for (let i = 2; i <= 100; i += 2) {
        sum += i;
    }
    return sum;
}

function countdown(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
    console.log("Blast Off!");
}

function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}

// Example usage
const cart = [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }];
console.log(calculateTotal(cart)); // Output: 40

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

function getGrade(score) {
    let grade;
    switch (true) {
        case score >= 90 && score <= 100:
            grade = "A";
            break;
        case score >= 80 && score <= 89:
            grade = "B";
            break;
        case score >= 70 && score <= 79:
            grade = "C";
            break;
        case score >= 60 && score <= 69:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    return grade;
}

// Example usage
console.log(getGrade(85)); // Output: B

function generateMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = "";
        for (let j = 1; j <= 10; j++) {
            row += (i * j).toString().padStart(4, " ");
        }
        console.log(row);
    }
}

// Example usage
generateMultiplicationTable();