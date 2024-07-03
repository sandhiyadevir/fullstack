// Random method round

console.log(Math.random()*10);         // 10 kulla eruka randamalised number varum

// console.log(Math.random()*100);         // 100 kulla eruka randamalised number varum

// console.log(Math.round(1.67));           // .5 ku mela erundha round varum so 2

// console.log(Math.round(1.47));           // .5 ku kela erundha round varum so 1

function randomNumberGenerator(num){
    return Math.random(Math.random()*num)
}
console.log(randomNumberGenerator(10));         // 10 to 10 kulla erukura number generate pannum

function randomNumberGenerator(start,end){          // 10 to 20 kulla erukka number generate panradhuku use pannanum
    let randNum = Math.round(Math.random()*end);
    while(start>randNum){
        randNum = Math.round(Math.random()*end); 
    }
    return randNum;
}
console.log(randomNumberGenerator(10,20)); 


function randomNumberGenerator(start,end){          // 10 to 100 kulla erukka number generate panradhuku use pannanum
    let randNum = Math.round(Math.random()*end);
    while(start>randNum){
        randNum = Math.round(Math.random()*end); 
    }
    return randNum;
}
console.log(randomNumberGenerator(10,100));
