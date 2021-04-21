// let js = "amazing";

// if (js === "amazing") alert("Javascript is fun!!");

// console.log(40 + 8 + 23 - 10);

// Values and Variables //
//////////////////////////////////

/*
console.log(js);
console.log("Jonas");
console.log(27);
let firstName = "Zac";
let PI = 3.1415;
console.log(firstName);

let myFirstJob = "Paper boy";
let myLastJob = "Pepsi Service Technician";
let myNextJob = "Junior Developer";

let myJobs = [myFirstJob, myLastJob, myNextJob];

console.log(myJobs);
console.log("My last job was working as a", myJobs[1]);
*/

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
// console.log(typeof country) >>> "string"
// console.log(typeof population) >>> "string"

// *********************NEW SECTION************************ //
// Data Types //
// Object or Primitive
// Primitive Data type Number, String, Boolean, undefined, null, symbol, bigInt

/*
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
*/

// Assignment on Data Types //

/*
let isIsland = false;
let language;
console.log(typeof isIsland);
// "boolean"
console.log(typeof language);
// "undefined"
*/

// ********************NEW SECTION*****************************//
// var, let and const //
// var >>> originally used to declare and define a variable, and was changable. Don't use anymore.
// let >>> used to declare a variable that can be changed later
// const >>> used to declare a variable that *cannot* be changed later

// let age = 27;
// age = 28;
// age is now reassigned to 28
// const birthYear = 1993;

// birthYear = 1995
// Will throw error in console

// const job;
// **Missing initializer in const declaration** In other words, you cannot leave a const variable as undefined

// Assignment on let, const and var //

/*
let language = "English";
const gender = "Male";
const height = "5'10\"";
let favoriteFood = "Hot wings";
*/

// ******************New Section******************** //

//  Basic Operators //

/*
const now = 2038;
const ageZac = now - 1993;
const ageSarah = now - 1998;
console.log("Zac is ", ageZac, "and Sarah is ", ageSarah);
console.log(ageZac ** 2, ageZac * 4, ageZac / 5);

const firstName = "Zac";
const lastName = "Invergo";
console.log(firstName + " " + lastName);
*/

//Assignment operators

/*
let x = 10 + 5;
x += 10; // x = x + 10 ( now x = 25 )
x *= 4; // x = x * 4 ( now x = 100 )
x++; // x = x + 1 ( now x = 101 )
x--; // x = x - 1 (now x = 100 )
console.log(x);

// Comparison operators
console.log(ageZac > ageSarah); // true
console.log(ageZac < ageSarah); // false
// includes >, <, >=, <=
console.log(ageSarah >= 40);
*/

// Assignment for Basic Operators

/*
let language = "English";
let populationUS = 330;
let halfPopulation = (populationUS / 2) * 10 ** 6;
console.log(halfPopulation);
console.log(populationUS + 1);
let populationFinland = 6;
console.log(populationUS > populationFinland);
let avgPopulation = 33;
console.log(populationUS > avgPopulation);
let description = `The United states has a population of about ${populationUS} million, and speaks primarily ${language}`;
console.log(description);
*/

// *******************New Section******************* //

// Operator Precedence //

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

IN EXCESS OF PEMDAS
*/
/*
let x, y;
x = y = 25 - 10 - 5; // x = y = 10 // x = 10, y = 10
console.log(x, y); // 10 10

const averageAge = (ageZac + ageSarah) / 2;
console.log(ageZac, ageSarah, averageAge);
*/

// *********************CODING CHALLENGE #1 and #2*********************** //
//  BMI = mass/height ** 2 = mass / (height * height) (mass in kg, height in m)

// Test Data One //
/*
let markDataOne = {
  mass: 78,
  height: 1.69,
};

let johnDataOne = {
  mass: 92,
  height: 1.95,
};

let markBMIOne = markDataOne.mass / markDataOne.height ** 2;
let johnBMIOne = johnDataOne.mass / johnDataOne.height ** 2;

let markHigherBMIOne = markBMIOne > johnBMIOne;

if (markHigherBMIOne == true) {
  console.log(true, "Mark has a higher BMI in test data 1");
} else console.log(false, "John has a higher BMI in test data 2");

// Test Data Two //
let markDataTwo = {
  mass: 95,
  height: 1.88,
};

let johnDataTwo = {
  mass: 85,
  height: 1.76,
};

let markBMITwo = markDataTwo.mass / markDataTwo.height ** 2;
let johnBMITwo = johnDataTwo.mass / johnDataTwo.height ** 2;

let markHigherBMITwo = markBMITwo > johnBMITwo;

if (markHigherBMITwo == true) {
  console.log(true, "Mark has a higher BMI in test data 2");
} else console.log(false, "John has a higher BMI in test data 2");
*/

//  ********************New Section********************** //

// Strings and Template Literals //

/*
const firstName = "Zac";
const job = "Programmer";
const birthYear = 1993;
const currentYear = 2037;

const zac =
  "I'm " +
  firstName +
  ", I am " +
  (currentYear - birthYear) +
  " years old and I work as a " +
  job +
  "!";
console.log(zac);

const zacNew = `I'm ${firstName}, I am ${
  currentYear - birthYear
} years old and I work as a ${job}!`;

console.log(zacNew);
console.log(`You don't need placeholders to use backticks`);

console.log("String with \n\
multiple \n\
lines\n\
no back ticks");

console.log(`Multi
line
string 
with back ticks`);
*/

//  ****************************New Section******************************** //

// Taking Decisions: if/else Statements //

/*
const age = 13;
const isOldEnough = age >= 16;
console.log(isOldEnough);

if (isOldEnough == true) {
  console.log("They are old enough to drive 🚗🚙.");
} else {
  const yearsLeft = 16 - age;
  console.log(
    `They are not old enough to drive. They have ${yearsLeft} years until they can...`
  );
}

*/
// Windows + ".>" button to open up emoji list

/*
const birthYear = 2005;
let century;
if ((birthYear <= 2000) & (birthYear >= 1900)) {
  let century = 20;
  console.log(`You were born in the ${century}th century!`);
} else if ((birthYear < 1900) & (birthYear >= 1800)) {
  let century = 19;
  console.log(
    `You were born in the ${century}th century. Congrats on still being alive, I guess.`
  );
} else if (birthYear < 1800) {
  console.log(`You're either lying or you're a vampire.`);
} else {
  let century = 21;
  console.log(`You were born in the ${century}st century!`);
}

*/
