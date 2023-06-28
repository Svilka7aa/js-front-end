function solve (arr, step) {
    let finalArray = [];

    for (let index = 0; index < arr.length; index++) {
        if (index % step === 0) {
        finalArray.push(arr[index])
        }
    }

    console.log(finalArray)
}

solve(['5', '20', '31', '4', '20'], 2)