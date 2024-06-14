// fibonacci without recursion
let num0 = 0;
console.log(num0);

let num1 = 1;
console.log(num1);

let num = 0;

for(let i = 2; i < 9; i++)
[
    num = num1 + num0,

    console.log(num),

    num0 = num1,
    num1 = num,
]

console.log();

function fibonacci(x) //  with recursion
{
    if(x == 0)
    {
        return 0;
    }
    if(x == 1)
    {
        return 1;
    }
    else
    return fibonacci(x-1) + fibonacci(x-2);
}

let m = fibonacci(10);
console.log(m);
