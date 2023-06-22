function countOccurences(text, word) {
    const words = text.split(" ");
    let result = 0

    for (let index = 0; index < words.length; index++) {
        if (words[index] === word) {
            result ++;
        }
    }
    console.log(result)
}

countOccurences('This is a word and it also is a sentence', 'is')