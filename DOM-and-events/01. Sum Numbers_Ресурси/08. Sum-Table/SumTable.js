function sumTable() {
    const prices = Array.from(document.querySelectorAll("td:nth-child(2)"));
    const sum = prices.reduce((acc, curr) => {
        return acc + Number(curr.textContent)
    }, 0)

    document.querySelector("#sum").textContent = sum
}