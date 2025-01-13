Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit

In both examples below firstName is of type string

Explicit Type
Explicit - Writing out the type: 
let firstName: string = "Omkar";
Explicit type assignment are easier to read and more intentional.

Implicit Type (guess)
Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName = "Omkar"

Error in TS Assignment
TS: will throw an error if data types do not match.

Example
let firstName: string = "Omkar" // type string
firstName = 33; // attempts to re-assign the value to a diffrent type

Implicit type assignment would have made firstName less noticeable as a string, but both will throw an error:

Example
let firstName = "Dylan"; // inferred to type string
firstName = 33; // attempts to re-assign the value to a different type

<!-- ********************* -->
JavaScript will not throw an error for mismatched types.
<!-- ************************ -->