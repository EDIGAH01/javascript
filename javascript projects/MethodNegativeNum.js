function  methodNegativetiveNum(arry)
{
    return arry.filter(elem => elem < 0);
}

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 =  methodNegativetiveNum(arr);
console.log(arr2);