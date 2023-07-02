function factorialDivisin (num1, num2) {
    function factroail (num) {
        let factorial = 1;
        for (let index = 1; index <= num; index++) {
            factorial *= index
        }
        return factorial
    }
    
    return (factroail(num1) / factroail(num2)).toFixed(2)
}

console.log(factorialDivisin(5, 2))