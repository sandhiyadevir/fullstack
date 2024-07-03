// conditional flow statement
// 1.control 
// 2.Looping
// 3.Jump

//if
var age=20;
if(age<18){
    console.log("your not eligible.");
}
 // else
 else{
    console.log("thanks You!");
 }

var age=20;

if(age<18 && age>60) { // 18 vida kammiya erukura age<.60 ku athigama >.
   if(18>age && age<60) 
     console.log("thank you!.");  
}
else{
    console.log("Your not eligible."); 
}

var age=18;
if(18<=age && age<55){
    console.log("Thank you!");
}else if(age>=55 && age<=60)
{
    console.log("Thank you are your valuable time");
}
else{
    console.log("Your not eligible");
}

var age=17;
if(18<=age && age<=60){
  if(age>=55){
    console.log("thank you for your valuable time");
  }else{
    console.log("Thank you!");
  }
} else{
    console.log("Your are not eligible.");
}

switch (5) {
    case 1:
        console.log("case 1");
        break;
    
    case 2:
        console.log("case 2");
        break; 

    case 3:
        console.log("case 3");
        break; 
        
    default:
        console.log("default");
        break;    
}


let mark=60;
switch (true) {
       case mark<50:
            console.log("Fail!");
            break;
        
        case mark>50:
            console.log("pass!");
            break; 
  
        default:
            console.log("invalid");
            break; 
}



switch (2) {
       case 1 :
            console.log("Jan");
            break;
        
        case 2:
            console.log("Feb");
            break; 
  
        default:
            console.log("invalid");
            break; 
}

looping
for(var i=0;i<3;i++){
    console.log(i);
}
console.log(i);

