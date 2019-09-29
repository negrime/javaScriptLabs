"use strict";

let a = document.querySelector('button');
console.log(a);
let count = 0;
a.onclick = function (e){
    count++;
    document.querySelector('p').textContent ="U clicked "  + count + " times";
    changeColor();
}


let click = false;
function changeColor() {
    click = !click;
    document.querySelector("p").style.color = click ? "red" : "blue";
}

