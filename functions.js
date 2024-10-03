var num = 23;

var num_two=2;
var sum = num+num_two;
console.log("sum",sum)


var num_three =40;

var num_four = 4;

var sum_two = num_three+num_four;
console.log("sum",sum)

// Functions
function  summation(){
     var num_five =40;

     var num_six =6;

     var sum_three = num_five + num+num_six;

     console.log("sum_three: ", sum_three);

}
//returns function
function summation_two(){
    var num_five = 40;
    var num_six = 34;
    

    var sum_three = num_five + num_six;
    return sum_three;

    
}
// use it by printing the value directly on the terminal 
console.log("sum four: ", summation_two())

// ASSigning the value of a variable
var sum_four= summation_two();

var sum_five = summation();
console.log(sum_five);



//functions with parameters
function summation_three(num_five,num_six){
     var sum_six = num_five + num_six;

     console.log("sum six: ", sum_six);

}

summation_three(40,4);
summation_three(100,2);
summation_three(100000,56)

// returning function with parameters
function summation_four(num_five,num_six){

    return num_five + num_six;;

}

//use it by printing the value directly on the terminal
console.log("sum five: ",summation_four(23,5));

//Assinging the value to a variable 
var sum_five = summation_four(263,58);


//Code takes name and you inluganda
Name = 'Muyobo Arnold';
{
console.log(Name,"OLOTYA SEBBO")
}







