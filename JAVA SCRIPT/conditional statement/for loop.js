// even numbers method 1
for(var i=2;i<10;i++){
    if(i%2==0)
       console.log(i);
}

// method 2

for(var i=10;i<100;i+=10){
    console.log(i);
}

// for loop

let star= " ";  //i row, j col           
for(var i=0;i<5;i++){                     //for(var row=0;row<5;row++){
    for(let j =0; j<5; j++){              // for(let col=0;col<5;col++)
        star+="*"  
        
    } 
     console.log(star);
     star=" ";
}
