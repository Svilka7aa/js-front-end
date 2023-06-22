function censoredWords (text, word) {
    let censoredText = text;

    while(censoredText.includes(word)) {
        censoredText = censoredText.replace(word, "*".repeat(word.length)); 
    }

    console.log(censoredText);
}

censoredWords('A small sentence with some words', 'small')