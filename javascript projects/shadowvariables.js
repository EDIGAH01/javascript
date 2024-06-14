const x = 1;
console.log(x);
{
    const x = 2;
    console.log(x);
}
console.log(x);

throw(
    () => {
        eval('let x = 1; let x = 2;');
    },
    {
        name: 'SyntaxError',
        message: "Identifier 'x' has already been declared",
    }
)