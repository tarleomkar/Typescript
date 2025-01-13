// Data Types in TypeScript
// TypeScript has various data types to handle different kinds of values. Let’s go through them:
// Primitive Data Types:
// number
// string
// boolean
// null and undefined
// symbol
// bigint
// 1.number: User for all kinds of numbers (integer, float)
var age = 25; // integer
var temperature = 36.6; // float
// console.log(age);
console.log(temperature);
// 2. string: Used for text or string values (a sequence of characters)
var firstName = "Omkar";
var grettings = "Hello, " + firstName;
console.log(grettings);
// 3. boolean: Used for true/false values
var isActive = true;
var isCompleted = false;
console.log(isCompleted);
// 4. null:
// null: Represents the intentional absence of any value.
var emptyValue = null;
console.log(emptyValue); // Output: null
// 5. undefined: Represents a variable that has been declared but not assigned any value.
var noValue = undefined;
console.log(noValue); // Output: undefined
// 6. symbol: A unique and immutable data type that is often used as identifiers.
/*
let sym: symbol = Symbol("unique");

console.log(sym.description); // Output: Symbol(unique)
*/
// 7. bigint: Used for large integres that areoutside range of normal SVGAnimatedNumberList.
/*
let bigNumbers: bigint = 1234567890123456789012345678901234567890n;
console.log(bigNumbers);
*/ 
