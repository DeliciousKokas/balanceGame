const form = document.querySelector(".js-form")
  input = form.querySelector("input")
  toDoList = document.querySelector(".js-todolist")

let toDos = []

function saveToDo(){
  localStorage.setItem("ToDos",JSON.stringify(toDos))
}

function deleteToDos(event){
  const li = event.target.parentNode
  toDoList.removeChild(li)
  const cleanToDos = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id)
  })
  toDos = cleanToDos
  console.log(toDos)
  saveToDo();
}

function paintToDo(text){
  console.log("Paint")
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1
  delBtn.innerHTML = "X"
  delBtn.addEventListener("click", deleteToDos)
  span.innerText = text
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = newId
  document.get
  toDoList.appendChild(li)
  input.value = ""

  const toDoObj = {
    text: text,
    id: newId
  }

  toDos.push(toDoObj)

  saveToDo()
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = input.value 
  paintToDo(currentValue)
}

function loadToDos(){
  const loadedToDos = localStorage.getItem("ToDos")
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos)
    parsedToDos.forEach(element => {
      console.log(element)
      console.log(element.text)
      paintToDo(element.text)
    });
  }
}

function init() {
  loadToDos()
  form.addEventListener("submit", handleSubmit)
}

init();