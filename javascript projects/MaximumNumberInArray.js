function maximumNumber(arr)// for of loop
{
    let max = arry[0];
    for ( elem of arr)
    {
        if(elem > max)
        {
            max = elem;
        }
    }
    return max;
}

let arry = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(maximumNumber(arry));

function maximuValue(ar) // for loop
{
    let max = ar[0];
    for(let i = 0; i < ar.length; i++)
    {
        let el = ar[i];
        if(el > max)
        {
            max = el;
        }
    }
    return max;
}

let arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(maximumNumber(arr1));