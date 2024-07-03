//Document Object Model
// document.title="kgcas";

// let elem=document.getElementById("head")
// // let content=elem.innerHTML
// // elem.innerHTML="Welcome";             // assign element  heading to welcome
// // elem.innerText="Welcome";             // only for text
// elem.innerHTML="<h1>Welcome</h1>";       //tag insert panrom
// console.log(content)


//function call panradhu
// function contManupulate(){
//     let elem = document.getElementById("head");
//     elem.innerHTML="<h1>Welcome</h1>";
// }

//5sec kaluchu name change panradhu
// function contManupulate(){
//         let elem = document.getElementById("head");
//         elem.innerHTML="<h1>Welcome</h1>";
// }
// setTimeout(contManupulate,5000);      //heading to welcome    

//click pannum podhu change panradhu
// function contManupulate(){
//     let elem = document.getElementById("head");         //heading to welcome 
//     elem.innerHTML="<h1>Sandhiya</h1>";
// }

//function syntax =function keyword ,contManupulate function name
//function contManupulate(){

//}

function darkmode() {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    // document.getElementById("button").innerText="light mode";  //orey line la kudukuradhu
    let button = document.getElementById("button")
    button.innerHTML =`<i class='bx bx-moon' ></i>`
    button.innerHTML += "Light mode";
}
function lightmode() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    let button = document.getElementById("button")
    button.innerHTML =`<i class='bx bx-sun' ></i>`
    button.innerHTML += "Dark mode";
}
function modechange() {
    let btext = document.getElementById("button").innerText
    if (btext == "Dark mode") {
        darkmode();
    } else if (btext == "Light mode") {
        lightmode();
    }
} 