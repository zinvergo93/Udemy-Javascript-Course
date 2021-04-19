let js = "amazing";

// if (js === "amazing") alert("Javascript is fun!!");

// console.log(40 + 8 + 23 - 10);

// Values and Variables //
//////////////////////////////////
// console.log(js);
// console.log("Jonas");
// console.log(27);
// let firstName = "Zac";
let PI = 3.1415;
// console.log(firstName);

let myFirstJob = "Paper boy";
let myLastJob = "Pepsi Service Technician";
let myNextJob = "Junior Developer";

let myJobs = [myFirstJob, myLastJob, myNextJob];

// console.log(myJobs);
// console.log("My last job was working as a", myJobs[1]);

// ASSIGNMENT SECTION //
// declare variables called "country", "continent" and "population" and assign their values according to your own country (population in millions) then log in the console

/*
  let country = "The United States of America";
  let continent = "North America";
  let population = 320 + " million";
  */

// console.log(
//   `I am from ${country}, located in the continent of ${continent}. The current population is ${population}`
// );

// ********************************************* //
// Data Types //
// Object or Primitive
// Primitive Data type Number, String, Boolean, undefined, null, symbol, bigInt
// Number // - Floating point numbers >>> Used for decimals and integers
let age = 27;
console.log(typeof age);
// String // - Sequence of characters >>> Used for text. Use (" ") or (' ') to define, in order to not confuse for a variable by JS
let firstName = "Zac";
console.log(typeof firstName);
console.log(typeof "Naya");
// Boolean // - Logical type that can only be true or false
let aboveThirty = false;
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof aboveThirty);
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun); // is now a string as it has been redefined
console.log(javascriptIsFun);
// Undefined // - Value taken by a variable that is not yet defined >>> Variable is declared but not defined with a value
let year;
console.log(year);
console.log(typeof year);
year = 1993;
console.log(year);
// Null // - Also means 'empty value' and can be a placeholder
let object = null;
console.log(typeof null); // Returns "object", which is considered a 'bug' in Javascript and should return "null"
// Symbol (ES2015) // - Value that is unique and cannot be changed [Not useful for now for current lessons]
//////////////////
// BigInt (ES2020) // - Larger integers than the Number type can hold.
