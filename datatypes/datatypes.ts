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
let age: number = 25;         // integer
let temperature: number = 36.6; // float
// console.log(age);
console.log(temperature);

// 2. string: Used for text or string values (a sequence of characters)
let firstName: string = "Omkar";
let grettings: string = "Hello, " + firstName;
console.log(grettings);

// 3. boolean: Used for true/false values
let isActive: boolean = true;
let isCompleted: boolean = false;
console.log(isCompleted);

// 4. null:
// null: Represents the intentional absence of any value.
let emptyValue: null = null;
console.log(emptyValue); // Output: null

// 5. undefined: Represents a variable that has been declared but not assigned any value.
let noValue: undefined = undefined;
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