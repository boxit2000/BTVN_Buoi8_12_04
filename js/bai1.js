let count = 0;

function cong() {
    count++;
    let sum = document.getElementById("num");
    sum.innerText = count;
}
function tru() {
    count--;
    let sum = document.getElementById("num");
    sum.innerText = count;
}
