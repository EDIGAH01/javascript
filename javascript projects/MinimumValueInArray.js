function minimumVal(arry) //for loop
{
    let min = arry[0];
    for(let i = 0; i < arry.length; i++)
    {
        let elem = arry[i];
        if(elem < min)
        {
            min = elem;
        }
    }
    return min;
}

let arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(minimumVal(arr1));

function minimumValue(arr) // for of loop
{
    let minim = arr[0];
    for( el of arr)
    {
        if(el < minim)
        {
            minim = el;
        }
    }
    return minim;
}

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(minimumValue(ar));