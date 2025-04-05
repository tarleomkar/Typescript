// Very Similar to interfaces, types let you aggregate data together
type User = {
    firstName: string,
    lastName: string,
    age: number
}
// but they let you do a few other things

// 1. Union
// let's Say you want to print the id of a user, which can be a number or string.
// Example 1
/*
type stringOrNumber = string | number;

function printId(id: stringOrNumber) {
    console.log(`Id: ${id}`);
}

printId(101)
printId("101")
*/

// Example 2
/*
type sumInput = string | number;

function sum(a: sumInput, b: sumInput) {
    return a + b
}
*/

// 2. Intersection
// What if you want to create a type that has every property of multiple types / interfaces
// you cannot do this using interface
type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string,
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Omkar",
    startDate: new Date(),
    department: "SDE 1"
};