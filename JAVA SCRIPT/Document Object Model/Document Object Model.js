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