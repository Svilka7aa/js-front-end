function calculator(num1, num2, action) {
    switch (action){
        case "multiply":
        console.log(num1 * num2);
        break;
        case "divide":
        console.log(num1 / num2);
        break;
        case "add":
        console.log(num1 + num2);
        break;
        case "subtract":
        console.log(num1 - num2);
        break;
    }
}

calculator(5, 5, 'multiply')
