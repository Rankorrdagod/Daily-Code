// variables: billSubTotal, taxRate, taxAmount, billTotal
let billSubTotal = 60;
let billTotal;

const taxRate = 0.05;
let taxAmount;

//multiply billSubTotal by taxRate
taxAmount = billSubTotal * taxRate;

// add billSubTotal to taxAmount and assign value to billTotal
billTotal = billSubTotal + taxAmount;


// Log the billTotal
console.log('$' + billTotal.toFixed(2));