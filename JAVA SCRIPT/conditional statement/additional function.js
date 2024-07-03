// addition function method (1)
// let fullName ="sandhiya";
// function add(a,b){
//    console.log(a);
//    console.log(b);
//    return a+b;
// }
// console.log(add(a=2,b=3));

// sub function
// let fullName ="sandhiya";
// function add(a,b){  // sub,div,mod console kudukka kudadhu
//  return a-b;
// }
// console.log(add(2,3));

// multiplication  function
// let fullName ="sandhiya";
// function add(a,b){  // sub,div,mod console kudukka kudadhu
//  return a*b;
// }
// console.log(add(2,3));

// division function
// let fullName ="sandhiya";
// function add(a,b){  // sub,div,mod console kudukka kudadhu
//  return a/b;
// }
// console.log(add(2,3));


// module function
// let fullName ="sandhiya";
// function add(a,b){  // sub,div,mod console kudukka kudadhu
//    console.log(a);
//    console.log(b);
//    return a%b;
// }
// console.log(add(a=2,b=3));

// value with in parameter method(1)

// let fullName="sandhu";
// function add(a=0,b=0,c=0){
// return a+b+c;
// }
// console.log(add(5,9,10));

// value with in parameter method(2)
// question?
// let fullName="sandhu";
// function add(...numbers){
// return numbers;
// }
// console.log(add(5,9,10,78));

Answer
let fullName="sandhu";
function add(...numbers){     // spread operator(...)
   let total=0;
   for (let i=0;i<numbers.length;i++) {   // i=0;i<1;i++  i lessthan 1 so return i++(i=i+1)  i=1+1=>2
      total+=numbers[i];  // total=numbers+numbers => 1+1=>2 loop kulla pogum          
}
  return total;
}            // 1 ,2, 3, 4, 5 ,6
console.log(add(5,9,10,78,10,90));

