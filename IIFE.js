// Immediately Invoked Function Expression (IIFE)

// function chai(){
//   console.log('DB CONNECTED')
// }
// chai()

//to immediately invoke the function 
// function chai is a named IIFE
(function chai(){
  console.log('DB CONNECTED')
})();

// 1st -> ()--> function definition second -->()->execution
/* Avoid Polluting the Global Scope: JavaScript has function-level scope, meaning that variables declared within functions are not accessible outside of them. By using an IIFE, you create a new scope, preventing variables inside the function from leaking into the global scope.*/

/*	Private Variables and Methods: Variables and functions inside an IIFE are isolated from the global environment. This allows you to create private variables or methods that cannot be accessed or modified from outside the <function className=""></function> */

( function aurchai(){
  console.log(`DB connected to`)
})();

// if we dont use ; after the first function definition then the execution will not end there and hence the second function wont start before the first ends

// simple iife or unnamed iife
((name)=>{
  console.log(`name is ${name}`)
})("ojas")

