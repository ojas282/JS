// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 > 1)
// console.log(2 != 1)

console.log("2" > 1) //true
console.log("01" > 1) //false

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
console.log(null <= 0) //true

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false
console.log(undefined <= 0) //false
/* 
the reason is that equality check == and comparisons > < <= >= works differently
comparisons convert null to a number, treating it as 0
that's why null >= 0 is true and null > 0 is false
*/

// === strict check checks values as well as data type too 

console.log("2" == 2) //it converts "" to int and hence returns true
console.log("2"===2) // it dont convert "" to int and also checks data types hence return false

