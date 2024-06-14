function negativeNumberArray(l)
{
    let k = [];
    for (elem of l)
    {
        if(elem < 0)
        {
            k.push(elem);
        }
    }
    return k;
}

let arry = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 = negativeNumberArray(arry);
console.log(arr2);

function negNumberArray(g)
{
    let p = [];
    for(let f = 0; f < g.length; f++)
    {
        let val = g[f];
        if(val < 0)
        {
            p.push(val);
        }
    }
    return p;
}

let c1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let c2 = negNumberArray(c1);
console.log(c2);