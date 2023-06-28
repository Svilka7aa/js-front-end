function sortedNames(arr) {
    const sortedArray = arr.sort()
    const length = arr.length

    for (let index = 0; index < sortedArray.length; index++) {
        console.log(`${index + 1}.${sortedArray[index]}`)
        
    }
}

sortedNames(["John", "Bob", "Christina", "Ema"])