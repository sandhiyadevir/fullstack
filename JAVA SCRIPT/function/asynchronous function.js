async.js


// function start(){
//     console.log("start")
// }
//  //setTimeout(start,5000)
// setInterval(start,1000)
// function running(){
//     console.log("running")
// }
// running()

let num=1;
function start(){
    let d=new Date();
    document.getElementById("time").innerHTML=d
    // document.getElementById("time").innerHTML=++num;
}
setInterval(start,1000);


