"use strict";

let a = document.querySelector('button');
console.log(a);
let count = 0;
a.onclick = function (e){
    count++;
    document.querySelector('p').textContent ="U clicked "  + count + " times";
    changeColor();
 //   debugger;
   /* if (count % 10 == 0) {
        alert("Wow, you clicked  " + count + " times!");
    }
*/
}



let click = false;
function changeColor() {
    click = !click;
    document.querySelector("p").style.color = click ? "red" : "blue";
}

