{
    const x = 0;
    console.log(x);
    {
        const y = 1;
        console.log(x, y);
        {
            const z = 2;
            console.log(x, y, z);
        }
    }
}

throw(
    () => console.log(x),
    {
        name: 'Reference',
        message: 'x is not defined',
    }
);