
// Global variable: Uganda's population (statistic)
let ugandaPopulation = 43.85 * 1e6; // 43,850,000

// Function to demonstrate local vs global variables
function populationExample() {
    console.log("Global Uganda Population:", ugandaPopulation);
    
    // Local variable: Kampala city population (statistic)
    let kampalaPopulation = 1.65 * 1e6; // 1,650,000
    
    console.log("Local Kampala Population:", kampalaPopulation);
    
    // Modify local variable
    kampalaPopulation = 1.7 * 1e6; // Update Kampala population
    
    console.log("Updated Local Kampala Population:", kampalaPopulation);
    
    console.log("Updated Local Kampala Population:", kampalaPopulation);
    
    // Modify global variable
    ugandaPopulation = 44.1 * 1e6; // Update Uganda population

// Call function
populationExample()

// Verify global variable modification
console.log("Updated Global Uganda Population:", ugandaPopulation)
}
// Attempt to access local variable outside function scope
// console.log(kampalaPopulation); // ReferenceError: kampalaPopulation is not defin}

