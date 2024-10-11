let school = {
    Name: 'XATO HIGH',
    SCHOOLlocation: 'Kampala',
    Studentscount: 210,
    yearestablished: 2001,
    
calculate_school_AGE: function(current_year) {
    return  current_year -this.yearestablished;
}
};
let school_Age =school.calculate_school_AGE(2024);
console.log(`The schoolAge ${school.Name} is ${school_Age}`)

    
