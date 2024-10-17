
// Assuming rainfall data for the last 10 days is stored in this array
let rainfallData=[
    {DAY:1,RAINFALL:256},
    {DAY:2,RAINFALL:256},
    {DAY:3,RAINFALL:256},
    {DAY:4,RAINFALL:256},
    {DAY:5,RAINFALL:256},
    {DAY:6,RAINFALL:256},
    {DAY:7,RAINFALL:256},
    {DAY:8,RAINFALL:256},
    {DAY:9,RAINFALL:256},
    {DAY:10,RAINFALL:256},
    
    

]

// Using a while loop to print each day's rainfall
let i = 0;
while (i < rainfallData.length) {
    console.log(`Day ${i + 1}: :RAINFALL${i+1} mm`);
    i++;
}






