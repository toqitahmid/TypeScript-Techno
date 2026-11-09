# Access Modifiers in TypeScript OOP

## What Are Access Modifiers?

Access modifiers control where a class member (property or method) can be accessed. They support **encapsulation**: hiding inernal details and exposing only a safe public interface. TypeScript enforces these rules at compile time, so violations are reported as errors before your code runs.


## The Four Modifiers

| Modifier | Accessible from | Notes |
|--- | --- | --- |
| `public` | AnyWhere | The default when no modifier is written |
| `private` | Inside the declaring class only | Not available to subclasses |
| `protected` | The declaring class and its subclasses | Not availabel to outside code |
| `readlonly` | Anywhere(read-only) | Can only be assigned at declaration or in the constructor |

## Practical Example
 
```ts
class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType: string;
  readonly id: number;
 
  constructor(owner: string, balance: number, id: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = "basic";
    this.id = id;
  }
 
  public deposit(amount: number): void {
    this.balance += amount;
  }
 
  public withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }
 
  public getBalance(): number {
    return this.balance;
  }
}
 
class SavingsAccount extends BankAccount {
  describe(): string {
    // protected is accessible in subclasses
    return `${this.owner}: ${this.accountType}`;
    // this.balance would be an error: private
  }
}
 
const acc = new BankAccount("Sam", 100, 1);
// Public members work from outside the class
acc.deposit(50);
acc.owner = "Alex"; // OK: public
console.log(acc.getBalance()); // 150
// acc.balance = 0; // Error: private
// acc.id = 2;      // Error: readonly
```
 
## How Each Modifier Behaves
 
- **`public`**: `owner` and `deposit()` can be used freely from anywhere, including outside the class.
- **`private`**: `balance` can only be changed through the class's own methods, which protects it from accidental or invalid changes.
- **`protected`**: `accountType` is hidden from outside code but available to `SavingsAccount`, which makes it useful for shared internal state in inheritance hierarchies.
- **`readonly`**: `id` is set once in the constructor and can never be reassigned. It can be combined with other modifiers, such as `private readonly`.
