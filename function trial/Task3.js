//function that calculates the average daily water usage in ahouse hold in kamapala
function calculateWaterusage(Water) {
    let total = 0;
    for (let i = 0; i < Water.length; i++) {
    total += Water[i];
    }
    return total / Water.length;
    }
    let Waterusage = [100, 200, 99, 300, 120];//Litres
    let averageWater = calculateWaterusage(Waterusage);
    console.log(`The average daily water usage is ${averageWater} litres in a household in kampala`);