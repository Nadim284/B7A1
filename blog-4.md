
Object-Oriented Programming (OOP) helps developers manage logic and reduce complexity in large-scale TypeScript projects by organizing code into reusable and structured components. The four pillars of OOP—Encapsulation, Abstraction, Inheritance, and Polymorphism—make applications more secure, scalable, and maintainable.


`Inheritance` allows one class to reuse features from another class, reducing duplicate code.

Example : 

```typescript
class BankAccount {
    userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }

    login() {
        console.log(`${this.userName} logged into the bank account`);
    }
}

class SavingsAccount extends BankAccount {
    showInterest() {
        console.log("Savings Account Interest Rate: 8%");
    }
}
const user = new SavingsAccount("Nadim");

user.login();
user.showInterest();

```

SavingsAccount inherits the login() method from BankAccount, which helps reuse code and simplify project structure.


`Abstraction` hides complex internal processes and only exposes necessary functionality.

Example

```typescript

abstract class PaymentSystem {
    abstract transfer(amount: number): void;

    transactionMessage() {
        console.log("Transaction Completed");
    }
}

class MobileBanking extends PaymentSystem {
    transfer(amount: number): void {
        console.log(`${amount} transferred using Mobile Banking`);
    }
}
const payment = new MobileBanking();

payment.transfer(1000);
payment.transactionMessage();

```

The user only sees how to transfer money, while the internal transaction logic remains hidden. Abstraction can be achieved using interfaces and implementing them in classes.


`Encapsulation` means hiding sensitive data and controlling access through methods.

Example

```typescript
class BankAccount {
    private balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

const user = new BankAccount();

user.deposit(5000);

console.log(user.getBalance());
```

Here, balance is private, so nobody can directly modify it. This improves security and prevents unwanted changes.


`Polymorphism` allows the same method to behave differently in different classes.

Example

```typescript
class BankAccount {
    calculateInterest(): void {
        console.log("Calculating Interest");
    }
}

class SavingsAccount extends BankAccount {
    calculateInterest(): void {
        console.log("Savings Account Interest: 8%");
    }
}

class CurrentAccount extends BankAccount {
    calculateInterest(): void {
        console.log("Current Account Interest: 3%");
    }
}
const savings = new SavingsAccount();
const current = new CurrentAccount();

savings.calculateInterest();
current.calculateInterest();
```

The same calculateInterest() method works differently for different account types.


At last, the four pillars of OOP help reduce complexity in banking applications and other large TypeScript projects by improving structure and organization.

Encapsulation protects sensitive banking data
Abstraction hides complex transaction logic
Inheritance reuses common banking features
Polymorphism allows flexible account behavior

Together, these concepts make applications cleaner, more scalable, and easier to maintain.