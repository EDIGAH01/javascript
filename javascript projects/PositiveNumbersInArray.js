function positiveNumbersArray(ar)
{
    let arr = [];
    for (let i = 0; i < ar.length; i++)
    {
        let elem = ar[i] ;
        if(elem >= 0)
        {
            arr.push(elem);
        }
    }
    return arr;
}

let arry = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 = positiveNumbersArray(arry);
console.log(arr2);

function forOfLoop(k)
{
    let s = [];
    for ( el of k)
    {
        if (el >= 0 )
        {
            s.push(el);
        }
    }
    return s;
}

let ms = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let m2 = positiveNumbersArray(ms);
console.log(m2);