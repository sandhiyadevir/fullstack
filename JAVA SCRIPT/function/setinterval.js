function time(){
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
let start = setInterval(time,1000);

function stop(){
    clearInterval(start);
}