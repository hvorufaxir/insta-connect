// filename: elaborate_code.js

/**
 * Complex JavaScript code example
 * This code generates a Fibonacci sequence and checks if each number is prime. It then calculates the sum of all prime numbers.
 */

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Generate Fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i <= limit; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }
  return fibonacciSequence;
}

// Constants
const LIMIT = 20;

// Generate Fibonacci sequence up to the defined limit
const fibonacciSequence = generateFibonacciSequence(LIMIT);

// Calculate the sum of all prime numbers in the Fibonacci sequence
let sumOfPrimes = 0;
for (let i = 0; i <= LIMIT; i++) {
  if (isPrime(fibonacciSequence[i])) {
    sumOfPrimes += fibonacciSequence[i];
  }
}

// Output the sum of prime Fibonacci numbers
console.log("Sum of prime Fibonacci numbers up to " + LIMIT + ": " + sumOfPrimes);