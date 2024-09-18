// let score = "33sbc"
// //we dont know where this score value is coming from and what type of value is this, string, number anything

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score) //this will also convert 33abc to number type 
// console.log(typeof valueInNumber)
// console.log(valueInNumber) //prints NaN Not a Number

// {
//   let score = null
//   let score2 = Number(score)
//   console.log(typeof score2)
//   console.log(score2)
  
// }

// {
//   let score = undefined
//   let score2 = Number(score)
//   console.log(typeof score2)
//   console.log(score2)
// }
// {
//   let score = true
//   let score2 = Number(score)
//   console.log(typeof score2)
//   console.log(score2)
// }
// {
//   let score = "ojas"
//   let score2 = Number(score)
//   console.log(typeof score2)
//   console.log(score2)
// }

// // "33" => 33
// // "33abc" => NaN but its type is number only
// // true => 1; false => 0
// {
// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// }
// {
//   let isLoggedIn = ""
//   let booleanIsLoggedIn = Boolean(isLoggedIn)
//   console.log(booleanIsLoggedIn)
// }
// {
//   let isLoggedIn = "ojas"
//   let booleanIsLoggedIn = Boolean(isLoggedIn)
//   console.log(booleanIsLoggedIn)
// }

// 1 => true; 0 => false
// "" => false
// "ojas" => true

// {
//   let someNumber = 33
//   let stringNumber = String(someNumber)
//   console.log(stringNumber)
//   console.log(typeof stringNumber)
// }

// ************************* Operations ***************************

// let value = 3
// let negValue = -value
// console.log(negValue)
// console.table([2+2, 2-2, 2*2, 2**3, 2/3, 2%3])



// let str1 = "hello"
// let str2 = "ojas"
// let str3 = str1 + str2
// console.log(str3)
// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1+2+"3")
// console.log("1" + 2 +3)
// console.log(1+12+3+"4")

console.log(true)
console.log(+true) // + is for conversion
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2
let gameCounter = 100
gameCounter++

console.log(gameCounter)
++gameCounter
console.log(gameCounter)
