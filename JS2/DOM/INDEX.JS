// getElementByTagName()

// var a = document.getElementsByTagName('li')
// console.log(a)

// getElementByClassName()

// var a = document.getElementsByClassName('hero')
// console.log(a)

// getElementById()

// var a = document.getElementById('hi')
// console.log(a)

// querrySelector()

// var a = document.querySelector('li')
// console.log(a)

// querrySelectorAll()

// var a = document.querySelectorAll('.qs')
// console.log(a)




// Traverse the DOM

// parentElement

// var parent = document.querySelector('li')
// var p = parent.parentElement
// console.log(p)

// previousElementSibling
var a = document.querySelector('.qs')
if(a.previousElementSibling == null){
  console.log("No Siblings found")
}
else{
  console.log(document.querySelector('.qs').previousElementSibling.innerHTML)
}



// children

// var child = document.querySelector('ul')
// console.log(child.children)
// console.log(child.childNodes)

// console.log(child.children[0])
// console.log(child.children[1])
// console.log(child.children[2])
// console.log(child.children[3])

// console.log(child.childNodes[0])

// append child

const ul = document.querySelector('ul')
const newE = document.createElement('li')
newE.textContent = 'Giga Chad'
ul.appendChild(newE)