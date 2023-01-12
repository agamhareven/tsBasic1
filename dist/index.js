"use strict";
function GetAvarage(Array) {
    let sum = 0;
    let avg;
    let count = 0;
    for (let i = 0; i < Array.length; i++) {
        sum = sum + Array[i];
        count++;
    }
    return avg = sum / count;
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
    let sort = [];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i + 1] < array3[i]) {
            sort[i] = array3[i + 1];
        }
        else {
            sort[i] = array3[i];
        }
    }
    for (let i = 0; i < sort.length; i++) {
        array3[i] = sort[i];
    }
}
console.log(GetAvarage([3, 5, 7, 89, 78])); //מחוץ לפונקציה ולהריץ בטרמינל
console.log(getAmountOfPositive([-4, 5, 9, -30, 7]));
console.log(sortList([60, 5, 9, -30, 7, 1]));
