function loadingBar(percentage) {
    let bar = ""
    for (let index = 1; index < 100; index += 10) {
        if (index < percentage) {
            bar += "%"
        } else {
            bar += "."
        }
    }
    if (percentage === 100) {
        console.log(`100% Complete!"\n[${bar}]`)
    } else {
    console.log(`${percentage}% [${bar}]\nStill loading...`)
    }
}

loadingBar(100)