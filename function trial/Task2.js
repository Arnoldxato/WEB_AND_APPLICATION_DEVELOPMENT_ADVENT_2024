//function calculate mealexpenses
function calculateMealExpenses(number_ofMeals,cost_perMeal){
    return number_ofMeals*cost_perMeal;
}

let N0_of_meals = 3;
let cost_perMeal = 5000;

let TOTAL_EXPENSES = calculateMealExpenses(N0_of_meals,cost_perMeal);
console.log(`The Total food expense for meals is :${TOTAL_EXPENSES}UGX`)
