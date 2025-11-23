/**
 * ================================
 * STUDENT JAVASCRIPT TASK
 * ================================
 * Instructions:
 * 1. Fork this repository to your own GitHub account.
 * 2. Clone the fork to your computer.
 * 3. Complete ALL tasks in this file.
 * 4. Commit your changes with meaningful messages.
 * 5. Push to your forked repo.
 * 6. Send a Pull Request to submit your work.
 *
 * Do not delete any function names.
 * Write all your solutions directly in the functions provided.
 */

// ================================
// TASK 1
// Write a function that returns the sum
// of two numbers passed as arguments.
// ================================

function addNumbers(a, b) {
    return a + b;
    // TODO: return the sum of a and b
}


// ================================
// TASK 2
// Write a function that checks if a number
// is EVEN. It should return true or false.
// ================================

function isEven(n) {
    return n % 2 === 0;
    // TODO: return true if n is even, false otherwise
}


// ================================
// TASK 3
// Write a function that takes an array of numbers
// and returns the largest number in the array.
// ================================

function findLargest(arr) {
    return Math.max(...arrr);
    // TODO: return the largest value in arr
}


// ================================
// TASK 4
// Write a function that takes a name
// and returns a greeting like:
// "Hello, Ada!"
// ================================

function greet(name) {
    return `Hello, ${name}!`;
    // TODO: return greeting message
}


// ================================
// DO NOT EDIT BELOW THIS LINE
// Used for quick testing
// ================================

console.log("Add Numbers Example:", addNumbers(3, 4));   // 7
console.log("Is 10 Even?:", isEven(10));                // true
console.log("Largest Number:", findLargest([3, 10, 6])); // 10
console.log("Greeting:", greet("Ada"));                 // Hello, Ada!
