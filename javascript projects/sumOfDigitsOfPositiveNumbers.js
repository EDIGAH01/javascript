function sumDigits(n)
{
    let s  = n.toString();
    let sum = 0;
    console.log(s)
    for (let char of s)
    {
        let digit = parseInt(char);
        sum += digit;
    }
    return sum;
}

let sum = sumDigits(1235231);
console.log("Sum: ", sum);