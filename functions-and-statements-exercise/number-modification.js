function appendNumber(num) {
    num = num.toString()
    let average = 
    num.
    split("")
    .map(Number)
    .reduce((total, current) => total + current, 0) / num.length;

    while (average < 5) {
        num += "9"
        average = 
        num.
        split("")
        .map(Number)
        .reduce((total, current) => total + current, 0) / num.length;
    }

    return num
}

console.log(appendNumber(101))