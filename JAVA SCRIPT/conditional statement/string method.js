// string method

let word="KGcas";
let arr=[];
for (let i=0; i<word.length; i++){               // ['K','G','c','a','s']
    arr[i] = word.charAt(i);

}
console.log(arr);
console.log(word.split("a"))                 // split is used to split the value given (a)=>["KGc",s]

console.log(word.toLowerCase());             // lowercase

console.log(word.toUpperCasee());          //uppercase

console.log(word.replace("ca","m"));      // replace ca=m output=>kgsm

console.log(word.startsWith("g"));       // checking true or false ...starting point is g or not 

console.log(word.startsWith("k"));      // starting valuse is k so true

console.log(word.startsWith("k"));        // it is not ending with k so false
console.log(word.indexOf("a",0));       // indexof

console.log(word.substring("2","4"));    // 0 1 2 3 4
                                        //  k g c a s  2to4 =ca


console.log(word.substring("2"));         // starting position 2 so cas

console.log(word.trim());                 // without space =KGcas

// Array method

// let arr = [13,10,12,3];

// arr.push(6);                      // push add last value   [ 13, 10, 12, 3, 6 ]
// arr.shift();                      // shift is used to remove 1st value [ 10, 12, 3 ]
// arr.unshift();                      // rome pannama varum[ 13, 10, 12, 3 ]
arr=arr.concat([7,8,9,0])           // used to add [13,10,12,3,7,8,9,0]
// arr.pop();                     // pop last one viturum =[13,10,12]


console.log(arr[2])

// let arr = [13,10,12,3];
arr=arr.concat([7,8,9,0]);        // another method for concatenate
                                

console.log(arr[2])