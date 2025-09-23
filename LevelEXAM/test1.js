//write a javascript function to check if a given number is prime


const prompt = require('prompt-sync')({ sigint: true });

let num = Number(prompt("Enter the number: "));
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${num} is a prime number` : `${num} is not a prime number`);
