function solve(input) {
    const [searchWords, ...words] = input;

    const wordOcurences = searchWords.split(" ").reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach((word) => {
        if (wordOcurences.hasOwnProperty(word)) {
            wordOcurences[word] += 1
        }
    })

    Object.keys(wordOcurences)
    .forEach(key => {
        console.log(`${key} - ${wordOcurences[key]}`)
    })
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])