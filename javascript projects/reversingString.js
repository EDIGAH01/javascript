let s = "Javascript";
function reverseString(s)
{
    let s2 = "";
    for(let i = s.length - 1; i >= 0; i--)
    {
        let char = s[i];
        s2 += char;
    }
    return s2;
}

console.log(reverseString(s));
