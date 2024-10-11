function SCHOOL(Name, SCHOOLlocation, Studentscount, SchoolType) {
    this.name = Name;
    this.SCHOOLlocation = SCHOOLlocation;
    this.Studentscount = Studentscount;
    this.SchoolType = SchoolType;
    this.introduce = function() {
    return `This is  ${this.name}, ${this.SchoolType} comprising of  ${this.Studentscount}students  in
    ${this.SCHOOLlocation}.`;
    };
    }
    let school1= new SCHOOL("Xato","kampala" , 210, "secondary school");
    let school2= new SCHOOL("David", "GULU", 300, "primary school");
    console.log(school1.introduce());
    console.log(school2.introduce());
    