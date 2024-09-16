// function SayMyName(){
//   console.log("O")
//   console.log("J")
//   console.log("A")
//   console.log("S")
//}

// SayMyName()  //SayMyName is called the reference and () is used for the execution of the function 
// console.log(SayMyName) //[Function: SayMyName]

function Add_Two_Numbers(number1, number2){  //here number1, number2 are called parameters
  console.log(number1 + number2)
}

Add_Two_Numbers() //NaN

console.log(Add_Two_Numbers()) //undefined

Add_Two_Numbers(3,4) //7   //here 3,4 are called arguments
Add_Two_Numbers(3, "4") //34  
Add_Two_Numbers(3, null) //3
Add_Two_Numbers(3, undefined) //NaN


//Now what will result print?

const result = Add_Two_Numbers(3,4)
//will result print 8?
console.log(result) //undefined
//now

function Add(number1, number2){
  let result = number1 + number2
  return result
}

const res = Add(3,4)
console.log(res) //7


//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,it returns answer as an array

function calculateCartPrice(...num){
  return num
}

console.log(calculateCartPrice(200,400,500,600,200,3004,5005)) //[200,400,500,600,200,3004,5005]

function calculateCartPrice2(val1, val2,...num){
  return num
}
console.log(calculateCartPrice2(300,200,100,400,500)) //[100,400,500] 

//Functions with objects

const user= {
  username : "Ojas",
  age : 22
}

function userPrint(userobj){
  return `The user name is ${userobj.username} and age is ${userobj.age}.`
}

console.log(userPrint(user))



//conosle.log(addone(5)) if we call addone() function before defining then there will be no error and it will run
function addone(num){
  return num + 1
}

addone(5)

//technique 2 to define functions using a const addTwo variable
//addTwo(5)  if we call this function before defining this it will cause an error and it will not run
const addTwo = function(num){ 
  return num + 2
}
addTwo(5)


