let school = {
    Name: 'XATO HIGH',
    SCHOOLlocation: 'Kampala',
    Studentscount: 210,
    yearestablished: 2001,

school_introduction: function(){
    return  `Hello, This is ${this.Name} comprising of ${this.Studentscount}students in ${this.SCHOOLlocation}.`;
}
};
console.log(school.school_introduction());