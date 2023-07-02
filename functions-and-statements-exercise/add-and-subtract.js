function addAndSubtract(num1, num2, num3){
    
    function add(){
        return num1 + num2
    }

    const sumOfFirstTwo = add(num1, num2)
    function subtract(sumOfFirstTwo, num3) {
        return sumOfFirstTwo - num3
    }

    return subtract(sumOfFirstTwo, num3)
}

console.log(addAndSubtract(23, 6, 10))