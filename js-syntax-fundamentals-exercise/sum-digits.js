function sumDigits (num) {
    const digitsString = num.toString();
    let sum = 0;

    for (let index = 0; index < digitsString.length; index++) {
        sum += Number(digitsString[index]);
    }
    console.log(sum)
}

sumDigits(245678)