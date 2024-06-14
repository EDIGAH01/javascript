const arr = [2, 3, -1, 5, 7, 9, 15, 95] ;
sum = 0;
for (elem of arr)
{
    sum += elem;
    console.log(sum);
}
console.log(sum);


function sumOfArray(ar)
{
    let add = 0;
    for(let i = 0; i < ar.length; i++)
    {
        add += ar[i];
    }
    return add;
}

let arry = [2, 3, -1, 5, 7, 9, 15, 95] ;
let addition = sumOfArray(arry);
console.log(addition);