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