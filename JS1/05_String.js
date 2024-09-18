const name = 'Ojas'
const repoCount = 50

// console.log(name + repoCount + " Value")

//using backticks
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

// console.log(typeof name)

const gameName = new String('Ojas')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length) //4
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) //a 
console.log(gameName.indexOf('O')) //0

const Name = new String('Radha-Krishna')

const newString = Name.substring(0,6)
console.log(newString)

console.log(newString.slice(-8,4))

const anotherString = "   ojas    "
console.log(anotherString) //___ojas____
console.log(anotherString.trim()) //ojas

const url ="https://ojas.com/ojas%20gupta"

// replace
console.log(url.replace(('%20'), '-'))

// includes
console.log(url.includes('ojas')) //true

// split
const name1 = "Ojas Kumar Gupta"
console.log(name1.split(" "))


