// function solve (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3){
//         result = num1;
//     } else if (num2 > num1 && num2 > num3) {
//         result = num2;
//     }else if (num3 > num1 && num3 > num2) {
//         result = num3;
//     }
//     console.log(`The largest number is ${result}.`)
// }

// solve(1 , 2, 3)

function solve(...input) {
    const sortedInput = input.sort(function(a, b) {
       return b - a
    })[0];
    
    console.log(`The largest number is ${sortedInput}.`)
}

solve(1, 2, 3, 4, 5, 6)