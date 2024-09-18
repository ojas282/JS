// Primitive Data type (these are call by value) when we copy them their copy is returned and we make changes in their copy not on the original data

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt,

const score = false
const scoreVAlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

// JavaScript is weakly typed. This means that variables in JavaScript can change types dynamically, and type conversions are often done implicitly. For example, you can assign a number to a variable and later assign a string to the same variable without any error:

// let value = 42;  // number
// value = "hello"; // now a string

// In contrast, statically typed languages (like Java or C++) enforce type rules at compile time, meaning the type of a variable is known and fixed when you write the code. JavaScript checks types at runtime, allowing more flexibility but potentially leading to type-related bugs.

const id = Symbol('123')
const anotherId = Symbol('123')

console.table([typeof(id), typeof(anotherId)])
console.log(id == anotherId) //false
console.log(id === anotherId) //false

const bigNumber =  39274238738912984987238742938n //Big Int




// Reference Type (Non - Primitive) we are given a reference in the memory directly of these data types

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //array

let myObj = {     //object
  name: "Ojas",
  age: 21,
}

const myFunctions = function(){   //function with value inside a variable
  console.log("Hello, World!")
}

console.log(typeof myFunctions) // function object (ECMA)
console.log(typeof bigNumber) //binInt