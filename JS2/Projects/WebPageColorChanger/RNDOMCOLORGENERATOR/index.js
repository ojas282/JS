// generating ranodm hex code


const randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}

let intervalId
const startChangingColor = function () {
  intervalId = setInterval(changeBgColor,2000)

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor()
  }
}
const stopChangingColor = function () {
  clearInterval(intervalId)
  const lastHex = document.body.style.backgroundColor
  intervalId = null
  result.textContent = `So you like ${lastHex}`
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

const result = document.querySelector('#result')
