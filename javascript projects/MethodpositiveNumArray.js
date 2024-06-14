function methodPositiveNum(arr)
{
    return arr.filter(elem => elem >=0);
}

let arry = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 =  methodPositiveNum(arry);
console.log(arr2);