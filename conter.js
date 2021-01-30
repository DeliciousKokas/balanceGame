const counter = document.querySelector(".js-counter")

let count = 0

function clickCounter(){
  return 1
}

function init(){
  counter.innerHTML = "It has been clicked " + clickCounter() + "times"
}

init()