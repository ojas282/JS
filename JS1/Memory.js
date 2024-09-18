// Stack -> Primitive
// Heap -> Non Primitive

let myChannel = "up32vlogs"

anothername = myChannel //anothername = up32Vlogs
anothername = "Ojas"
console.log(myChannel) //up32vlogs
console.log(anothername) //ojas  this is because anothername is a primitive datatype and is stored in stack and a copy of this value is passed rather than original one

let user ={                 //this goes into heap
  email: "user@gmail.com",
  upi: "user@ybl",
}

let user2 = user
user2.email = "Ojas@gmail.com"

console.log(user.email,user2.email) //Ojas@gmail.com Ojas@gmail.com
//this is becaue it is a object which is a refrence data type and changes are made onto  the same location


