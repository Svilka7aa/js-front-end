function solve(currentStock, deliverdStock) {
    const products = [...currentStock, ...deliverdStock];

    const stock = products.reduce((acc, curr, i) => {
        if (i % 2 ===0) {
            if (!acc.hasOwnProperty(curr)) {
                acc[curr] = products[i];
            }
        }
        return acc;
    }, {})

    console.log(stock)
}

solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)