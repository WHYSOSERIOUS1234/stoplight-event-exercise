(function () {
  'use strict';
//access stoplight element
//access slowlight element
//access golight element
let stoplight = document.getElementById('stopLight')
let slowlight = document.getElementById('slowLight')
let golight = document.getElementById('goLight')
//acess stopButton 
//access slowButton 
//access goButton
let stopButton = document.getElementById('stopButton')
let slowButton = document.getElementById('slowButton')
let goButton = document.getElementById('goButton')









stopButton.addEventListener('click', (e) => {
  if(stoplight.style.backgroundColor === 'red') {
    stoplight.style.backgroundColor = 'black'
  } else {
    stoplight.style.backgroundColor = 'red'
  }
})



slowButton.addEventListener('click', () => {
  if(slowlight.style.backgroundColor === 'yellow') {
    slowlight.style.backgroundColor = 'black'
  } else {
    slowlight.style.backgroundColor = 'yellow'
  }})

  goButton.addEventListener('click', () => {
    if(golight.style.backgroundColor === 'green') {
      golight.style.backgroundColor = 'black'
    } else {
      golight.style.backgroundColor = 'green'
    }})

    stopButton.addEventListener('mouseover',stop, false) 
    function stop(e) {
      console.log(stopButton.textContent)
    }

    slowButton.addEventListener('mouseover',slow, false) 
    function slow(e) {
      console.log(slowButton.textContent)
    }

    goButton.addEventListener('mouseover',go, false) 
    function go(e) {
      console.log(goButton.textContent)
    }

  })()