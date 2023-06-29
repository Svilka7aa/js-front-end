function repeatString(str, repeats) {
    let result = ""
    for (let index = 0; index < repeats; index++) {
        result += str
    }
    console.log(result)
}

repeatString("abc", 3)