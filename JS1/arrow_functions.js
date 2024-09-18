// // // "this" keyword refers to the current context 
// // const user = {
// //   username: "Ojas",
// //   price: 999,

// //   welcomeMessage: function(){
// //     console.log(`${this.username} welcome to website`);
// //     console.log(this)
// //   }

// // }

// // // user.welcomeMessage()
// // // user.username = "sam"
// // // user.welcomeMessage()

// // console.log(this) //in node environment "this" will return {} 

// //*******************************arrow*****************************************


// // function chai(){
// //   console.log(this)
// // }

// // chai()

// // function chai(){
// //   let username = "Ojas"
// //   console.log(this.username) //undefined, as this means this keyword context works only inside objects scopes and not inside function scope
// // }

// // chai()

// // const chai = function () {
// //   let username = "Ojas"
// //   console.log(this.username)  //undefined
// // }

// // chai()



// //THE ARROW FUNCTION

// // const chai = () => {
// //   let username = "Ojas"
// //   console.log(this.username)  //undefined
// // }

// // chai() //undefined
// // console.log(this)  // {}


// const chai = () => {
//   let username = "Ojas"
//   console.log(this)  // {}
// }

// chai() // {}



/////////////////////////////////

// const addTwo = (num1, num2) => {  BASIC ARROW FUNCTION  EXPLICIT RETURN 
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 +num2  // IMPLICIT RETURN means it is assumed that the return keyword is not necessary to write as it is only a one line function

// const addTwo = (num1, num2) => (num1 +num2)  //when using curly braces then return keyword is necessary while when using () braces then return is not necessry

//in order to return an object use () compulsarily

// const addTwo = (num1, num2) => {username : "Ojas"} //returnsundefined

const addTwo = (num1, num2) => ({username : "Ojas"}) //returns {username : "Ojas"}
console.log(addTwo(3, 4))

