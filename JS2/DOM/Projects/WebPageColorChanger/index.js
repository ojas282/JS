const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
const texts = document.querySelectorAll('h1')
const h2s = document.querySelectorAll('h2')



button.forEach(function (button) {
  button.addEventListener('mouseover', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.background = e.target.id
      texts.forEach(function(each){
        each.style.color = "white"
      })
      h2s.forEach(function(each){
        each.style.color = "white"
      })
    }
    if(e.target.id == 'white'){
      body.style.background = e.target.id
      texts.forEach(function(each){
        each.style.color = "black"
      })
      h2s.forEach(function(each){
        each.style.color = "black"
      })
    }
    if(e.target.id == 'blue'){
      body.style.background = e.target.id
      texts.forEach(function(each){
        each.style.color = "white"
      })
      h2s.forEach(function(each){
        each.style.color = "white"
      })
    }
    if(e.target.id == 'yellow'){
      body.style.background = e.target.id
      texts.forEach(function(each){
        each.style.color = "black"
      })
      h2s.forEach(function(each){
        each.style.color = "black"
      })
    }
    if(e.target.id == 'purple'){
      body.style.background = e.target.id
      texts.forEach(function(each){
        each.style.color = "white"
      })
      h2s.forEach(function(each){
        each.style.color = "white"
      })
    }
  })
})