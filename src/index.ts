let getAvarage=(Array: number[]): number => 
{
    let sum=0;
    let avg;
    let count=0;
    Array.forEach(element => {
        sum=sum+element;
    });
     avg=sum/count;
     return avg;
}
let getAmountOfPositive=(array2: number[]) : number =>
{
    let positives=0;
    array2.forEach(element => {
        if(element>0)
        {
            positives++;
        }
    });
    return positives;
}
let sortList=(array3: number[]) : number[] =>
{
    let sortarr : number[]=[];
    sortarr=array3.sort();
    return sortarr;
}
console.log(getAvarage([3, 5, 7, 89, 78])); //מחוץ לפונקציה ולהריץ בטרמינל
console.log(getAmountOfPositive([-4,5,9,-30,7]));
console.log(sortList([5,9,-30,7,1]));