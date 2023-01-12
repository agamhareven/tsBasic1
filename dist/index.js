"use strict";
function getAvarage(Array) {
    let sum = 0;
    let avg;
    let count = 0;
    for (let i = 0; i < Array.length; i++) {
        sum = sum + Array[i];
        count++;
    }
    avg = sum / count;
    return avg;
    // const array1:number[]=[];
}
function getAmountOfPositive(array2) {
    let positives = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > 0) {
            positives++;
        }
    }
    return positives;
}
function sortList(array3) {
    let sortarr = [];
    sortarr = array3.sort();
    return sortarr;
}
console.log(getAvarage([3, 5, 7, 89, 78])); //מחוץ לפונקציה ולהריץ בטרמינל
console.log(getAmountOfPositive([-4, 5, 9, -30, 7]));
console.log(sortList([5, 9, -30, 7, 1]));
