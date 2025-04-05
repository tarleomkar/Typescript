"use strict";
// 1. function to print the hello world
function greet(firstName) {
    console.log("Hello" + firstName);
}
greet("omkar");
// greet(1) // error boy (not use number when we declares the string to parameter

// 2. sum of two numbers
function sum(a, b) {
    return a + b;
}
let ans = sum(2, 2);
console.log(ans);


// 3. return true or false based on if a user is 18+
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));

// 4. create a function that takes another function as input and runs it after 1 second
function delayedCall(anotherFunc: () => void) {
    setTimeout(anotherFunc, 1000);
}

function log() {
    console.log("hi there");
}

delayedCall(log)

// number, string, 
// any
// let x: any = 1;
// x = true
// x = "omkar"
// x = true
