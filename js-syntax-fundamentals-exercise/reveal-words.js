function revealWords (word, text) {
    let wordIndex = 0
    let length = text.length

    for (let index = 0; index < length; index++) {
        if (text[index] === "*") {
        text.replace("*", word[wordIndex]);
        wordIndex += 1
    
        }
    }
    console.log(text)
}

revealWords('great','softuni is ***** place for learning new programming languages')