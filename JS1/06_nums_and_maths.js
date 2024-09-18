
// const balance = new Number(100)
// console.log(balance)  // [Number: 100]
// console.log(typeof balance) //object

// const new_Str = balance.toString()
// console.log(balance.toString()) // '100'
// console.log(balance.toString().length) //3
// console.log(typeof balance) //object

// console.log(typeof new_Str)

// console.log(balance.toFixed(2)) //100.00

// let otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)) //23.9

// otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3))

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'))  //10,00,00,000



//++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++


console.log(Math)
console.log(Math.abs(-4)) //4
console.log(Math.round(4.3)) //4
console.log(Math.ceil(4.3)) //5
console.log(Math.floor(4.9)) //4
console.log(Math.min(4,3,2,4,5,1)) //1
console.log(Math.random()) //lies between 0 and 1 only
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)
