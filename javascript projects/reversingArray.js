let ar = [1, 2, 3];

function reverseArray(ar)
{
    let ar2 = [];
    for (let i of ar.reverse())
    {
        ar2.push(i);
    }
    return ar2;
}
let ar2 = reverseArray(ar);
console.log(ar2);

let arr = [1, 2, 3];
let arr2 = [];
for(let i = arr.length - 1; i >= 0; i--)
{
    arr2.push(arr[i]);
}
console.log(arr2);