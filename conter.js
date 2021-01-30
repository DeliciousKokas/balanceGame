const counter = document.querySelector(".js-counter")
  countBtn = document.querySelector(".js-count")
  resetBtn = document.querySelector(".js-reset")

let count = localStorage.getItem("count")

function paintCounter(){
  if (count === null) {count = 0}
  if (count < 2) {
    countBtn.innerHTML = "It has been clicked " + count+ "time"
  } else {
    countBtn.innerHTML = "It has been clicked " + count+ "times"
  }
}

function countSubmit(){
  count = parseInt(count) + 1
  localStorage.setItem("count", count)
  paintCounter()
}

function handleSubmit(){
  countBtn.addEventListener("click", countSubmit)
}

function resetCounter(){
  resetConfirm = window.confirm("Are you sure?")
  if (resetConfirm) {
    count = 0
    localStorage.setItem("count", count)
    paintCounter()
  }
}

function handleReset(){
  resetBtn.addEventListener("click", resetCounter)
}

function init(){
  paintCounter()
  handleSubmit()
  handleReset()
}

init()