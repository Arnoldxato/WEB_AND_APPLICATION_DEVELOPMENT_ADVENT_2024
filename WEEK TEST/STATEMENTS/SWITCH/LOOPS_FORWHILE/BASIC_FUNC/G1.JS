//CREAT FUNCTION CALCULATE TAX

function calculateTax(income) {
    const taxRate = 0.15;
    const taxPayable = income * taxRate;
    return taxPayable;
}

// OUPUTT AFTER

let income = 100000;
console.log(`Tax payable: ${calculateTax(income)} NIARA`);
