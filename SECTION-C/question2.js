function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(sumOfEvens(numbers));
