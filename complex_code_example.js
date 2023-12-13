/* 
 * Filename: complex_code_example.js
 * Content: A complex JavaScript code example showcasing various concepts and techniques.
 * Author: OpenAI
 */

// Define a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create a derived class representing a student
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method to display student information
  displayInfo() {
    this.introduce();
    console.log(`I am studying in grade ${this.grade}.`);
  }
}

// Create an instance of the Student class
const student1 = new Student("John Doe", 18, 12);

// Define a function to generate random numbers within a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate an array of 10 random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}

// Sort the array in ascending order
randomNumbers.sort((a, b) => a - b);

// Define a closure that calculates the sum of two numbers
function createAdder() {
  const message = "The sum is: ";

  function addNumbers(a, b) {
    console.log(message + (a + b));
  }

  return addNumbers;
}

// Create an instance of the adder closure
const adder = createAdder();

// Add two numbers using the closure
adder(5, 3);

// Create an asynchronous function to simulate API request
async function fetchData() {
  // Simulate a delay in the response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return mock data
  return { id: 1, name: "Example Data" };
}

// Call the asynchronous function and handle the result using async/await
(async () => {
  const data = await fetchData();
  console.log("Received data:", data);
})();

// Define a higher-order function that applies a given callback to each element of an array
function mapArray(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define a callback function to square a number
function square(number) {
  return number * number;
}

// Apply the callback to each number in the array
const squaredNumbers = mapArray(numbers, square);
console.log("Squared numbers:", squaredNumbers);

// Implement a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate the factorial of a number
const num = 5;
const result = factorial(num);
console.log(`Factorial of ${num} is ${result}.`);

// Define a generator function that generates an infinite sequence of Fibonacci numbers
function* fibonacciGenerator() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Create an instance of the generator
const fibonacci = fibonacciGenerator();

// Generate the first 10 Fibonacci numbers
const fibonacciNumbers = [];
for (let i = 0; i < 10; i++) {
  fibonacciNumbers.push(fibonacci.next().value);
}

console.log("Fibonacci numbers:", fibonacciNumbers);

// ...

// More complex code can be added beyond this point.