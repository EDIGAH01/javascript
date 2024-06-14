// To the left.
let ar = [1,2,3];

function rotateLeft(ar)
{
    let first = ar.shift();
    ar.push(first);
}
rotateLeft(ar);
console.log(ar);
rotateLeft(ar);
console.log(ar);

// To the right.
function rotateRight(ar)
{
    let last = ar.pop();
    ar.unshift(last);
}

rotateRight(ar);
console.log(ar);
rotateRight(ar);
console.log(ar);