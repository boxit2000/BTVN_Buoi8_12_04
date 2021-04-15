

// function tang(){
//     index++;
// }    
let clear;
function setvalue() {
    let i = Number(document.getElementById("text").value);
    console.log(i);
    console.log(typeof (i));
    i--;
    document.getElementById("text").value = i;
}
function start() {
    clear = setInterval(setvalue, 1000);
}
function stop() {
    clearInterval(clear);
}

// let demnguoc = setInterval(start, 1000);
// let i = Number(document.getElementById("text").value);
// function start() {

//     console.log(i);
//     console.log(typeof (i));
//     i--;
//     document.getElementById("text").value = i;
// }

// function stop() {
//   clearInterval(demnguoc);
// }