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
let v: any = true;
v = "string"
console.log(Math.round(v)); // no error as it can be "any" type 
// Output: NaN

// unknown
// In TypeScript, the unknown type is a safer alternative to any. It's used to represent a value of an unknown type, and it forces you to perform type checks before using the value in a specific way. This makes it ideal for scenarios where the type of a value is not known at compile time.

// Here’s a detailed explanation with examples:

// Key Characteristics of unknown:
// Safer than any: Unlike any, you can't directly perform operations on an unknown type. You must first narrow its type with type guards or assertions.
// Type Checking Required: You can't assign an unknown type to other types without explicitly checking or asserting its type.
// Use Case: Useful for handling values from external sources (e.g., API responses) where the exact type isn't known upfront.

let data: unknown;

data = 42;           // OK
data = "Hello";      // OK
data = { key: "value" }; // OK


// Narrowing with Type Guards:
// You can use typeof, instanceof, or other custom checks to narrow the type.

let value: unknown = "Hello, TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase()); // Now it's safe to use
}

if (typeof value === "number") {
    console.log(value + 10); // Safe because we confirmed it's a number
}

// Assigning unknown to Other Types:
// You can only assign an unknown variable to other types after performing a type assertion.

let value: unknown = 42;

// Direct assignment causes an error
// let num: number = value; // Error: Type 'unknown' is not assignable to type 'number'

// Using a type assertion
let num: number = value as number; // Safe after assertion
console.log(num + 10); // Output: 52

// Feature      	unknown	                            any
// Type Safety	    Enforces type checks before usage.  Allows any operation without checks.
// Assignability   Can't be assigned to other types    Can be freely assigned to any type.
//                 directly.
// Use Case        When type is uncertain but safety is   When flexibility is prioritized
//                 required.