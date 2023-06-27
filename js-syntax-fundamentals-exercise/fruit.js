function fruit (fruit, weightInGrams, pricePerKilogram) {
    const weightInKilogram = weightInGrams / 1000
    const totalPrice = weightInKilogram * pricePerKilogram

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilogram.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)