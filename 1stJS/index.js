"use strict";
function calculateAmplitude(a) {
    return Math.max(...a) - Math.min(...a);
}


let read = prompt("Введите полседовательность", "1, 2, 3, 4, 5, 6, 7, 8");
let line = read.split(", ");

if (line.length % 4 === 0 && line.length >= 8) {
   // let arr = line.reduce()
    let a = line.length / 4;
    let max = calculateAmplitude(line.slice(0, a));
    let maxIndex = 1;
    let index = 2;
    for(let i = a; i < line.length; i+=a) {
        let tmp = calculateAmplitude(line.slice(i, i + a));
        if (tmp > max) {
            max = tmp;
            maxIndex = index
        }
        index++;
    }

    console.log(maxIndex);
    let result;
    switch (maxIndex) {
        case 1: result = "ЗИМА";
        break;
        case 2: result = "ВЕСНА";
        break;
        case 3: result = "ЛЕТО";
        break;
        case 4: result = "ОСЕНЬ";
        break;
    }
    alert(result);
}
else {
    alert("Неверный формат!");
}