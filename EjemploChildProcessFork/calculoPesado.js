
process.on('message', message => {
    let sum = 0;
    for (let i = 0; i < 9e9; i++) {
        sum += i 
    };
    process.send(sum);
});

