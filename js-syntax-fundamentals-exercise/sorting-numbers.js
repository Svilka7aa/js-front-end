function sortingNumbers(arr) {
    const sotredArray = arr.sort((a, b) => a - b);
    const resultArray = [];
    const length = arr.length
    for (let index = 0; index < length; index++) {
        if (index % 2 === 0) {
            resultArray.push(sotredArray.shift())
        } else {
            resultArray.push(sotredArray.pop())
        }
    }
    console.log(resultArray)

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
