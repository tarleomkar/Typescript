// TypeScript Special Types
// TypeScript has special types that may not refer to any specific type of data.
// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
// The example below does not use any and will throw an error:
// Examples without any
/*
let u = true; // Error: Type 'string' is not assignable to type 'boolean'.
u = "string"; // // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
console.log(Math.round(u));
*/
// Setting any to the special type any disables type checking
// Examples with any
var v = true;
v = "string";
console.log(Math.round(v));
