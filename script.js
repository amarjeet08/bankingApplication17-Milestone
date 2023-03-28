// Define an object for the customer
const customer = {
  name: "John Doe",
  balance: 1000
};

// Method to deposit money into the customer's account
function deposit(amount) {
  this.balance += amount;
  console.log(`Successfully deposited $${amount}. New balance is $${this.balance}.`);
}

// Method to withdraw money from the customer's account
function withdraw(amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds. Transaction cancelled.");
    return;
  }
  this.balance -= amount;
  console.log(`Successfully withdrew $${amount}. New balance is $${this.balance}.`);
}

// Example usage
customer.deposit = deposit;
customer.withdraw = withdraw;

customer.deposit(500); // Successfully deposited $500. New balance is $1500.
customer.withdraw(200); // Successfully withdrew $200. New balance is $1300.
customer.withdraw(1500); // Insufficient funds. Transaction cancelled.