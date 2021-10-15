// Assign initial values
const billTotal = 40;
let tipRate = .18;

tipRate = .12;


// Calculate tip
const tip = billTotal * tipRate;

// Output result with template literals
console.log(`Tip for $${billTotal} at ${tipRate * 100}%: $${tip}.`);