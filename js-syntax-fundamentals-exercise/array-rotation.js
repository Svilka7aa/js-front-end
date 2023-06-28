function arrayRotation(arr, rotation) {
    for (let index = 0; index < rotation; index++) {
        const firstElement = arr.shift()
        arr.push(firstElement)
    }
    console.log(arr.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)
console.log("---------------------")
arrayRotation([32, 21, 61, 1], 4)