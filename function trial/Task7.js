//number 7 recursive functions(calculate factorial)
function factorial(n) {
    if (n === 1) {
    return 1;
    } else {
    return n * factorial(n - 1);
    }
    }
    let result = factorial(5);
    console.log(`The factorial of 5 is ${result}`);
    //function  countdown that prints a coun
    function countdown(num){
      if(num<0){
        return;//stop recursion if num is a neg
      }
      console.log(num);//print current number
      countdown(num-1);
    }
        countdown(10);//example to use for the countdown
          
        