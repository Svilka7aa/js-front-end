function sameNumbers(num) {
const numString = num.toString();
let isConsistaent = true;
let sum = Number(numString[0]);


for (let index = 1; index < numString.length; index++) {
    sum += Number(numString[index]);
    if(numString[index] !== numString[index - 1]) {
        isConsistaent = false
        }
    }

    console.log(isConsistaent)
    console.log(sum)
}

sameNumbers(2222222)