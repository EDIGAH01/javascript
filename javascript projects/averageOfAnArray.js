function averageOfArray(k) //using function
{
    let sum = 0;
    for(let i = 0; i < k.length; i++)
    {
        sum += k[i];
    }
    return sum / k.length;
}

let arr = [ 1, 3, 9, 15, 90];
let ave = averageOfArray(arr);
console.log(ave);

// For of loop.
let add = 0;
let arry = [1, 3, 9, 15, 90];
for (elem of arry)
{
    add += elem;
}
console.log(add / arry.length);

// for loop.
let sum = 0;
let p = [1, 3, 9, 15, 90];
for(let j = 0; j < p.length; j++)
{
    sum += p[j];
}
console.log(sum / p.length);

// While loop.
let ad = 0;
let s = [1, 3, 9, 15, 90];
let k  = 0;
while (k < s.length)
{
    ad += s[k];
    k++;
}
console.log(ad / s.length);