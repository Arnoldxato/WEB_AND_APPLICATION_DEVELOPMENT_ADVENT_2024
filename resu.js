//what
let score = 80;
if (score > 90 && score <= 100){
    console.log("A grade");
}else if (score > 75 && score <= 90){
    console.log("B grade");
}else if (score >= 50 && score <= 75){
    console.log("C grade");
}else {
    console.log("fail");
}

//switch 
let scoree = 80;
switch (scoree) {
    case 100:
        console.log("A grade");
    //break;
    case 90 :
        console.log("B grade");
   // break;
    case 75:
        console.log("c grade"); 
     //break;
    default:
        console.log("Fail")

    
}