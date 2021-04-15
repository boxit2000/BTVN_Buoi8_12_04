// function logArray(arrayParameter){
//     for (element of arrayParameter){
//         console.log(element);
//     }
// }
let arrNumber = [1, 2, 3, 4, 5, 6];
// let arrString = ['mot','hai','ba'];
// let arr = [1,2,'ba',4,'nam'];
// logArray(arrNumber);

// function themvaocuoi(arr,newE){
//     arr[arr.length] = newE;
// }
// themvaocuoi(arrNumber,7);
// console.log(arrNumber)

function dientichhinhvuong(dodaicanh) {
    return dodaicanh * dodaicanh;
}
console.log(dientichhinhvuong(12));
// function check(string){
//     if (string === undefined || string === "" ){
//         console.log("False");
//     }else {
//         console.log("True");
//     }    
// }
// let s = prompt("Nhap vao string");
// check(s);
const luythua = (so, somu = 2) => {
    return Math.pow(so, somu);
}
console.log(luythua(10, 3));
console.log(luythua(10));

const showTime = () => {
    let currentDate = new Date();
    console.log(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
};
setTimeout(showTime, 5000);

setInterval(() => {
    let clockSecond = document.getElementById("second");
    clockSecond.innerText = new Date().getSeconds();
}, 1000);
setInterval(() => {
    let clockMinutes = document.getElementById("minutes");
    clockMinutes.innerText = new Date().getMinutes();
});

setInterval(() => {
    let clockHours = document.getElementById("hours");
    clockHours.innerText = new Date().getHours();
});

setInterval(() => {
    let clockDay = document.getElementById("thutrongtuan");
    let ngaytrongtuan = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    for (let i = 0; i < ngaytrongtuan.length; i++){
        if ( new Date().getDay() === i){
            clockDay.innerText = ngaytrongtuan[i];
        }
    }
        
});
console.log(new Date().getDay());