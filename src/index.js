document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById("create-task-form")

  form.addEventListener("submit", function (event){
    event.preventDefault()
    renderList()

  })


})


function renderList(){
  let newTaskInput = document.getElementById("new-task-description").value
  // console.log(newTaskInput)

  let myTodos = document.getElementById("tasks")
  let ulNewTask = document.createElement("li")

  // let date = document.createElement("p")

  ulNewTask.innerHTML = `${newTaskInput}, ${dateStamp()}`

  // date.innerHTML = 

  //creates delete buttons
  ulNewTask.innerHTML += ' <button onclick="this.parentNode.remove()">X</button>'


  // let xBtn = document.createElement("button")
  // xBtn.innerHTML = "X"
  // xBtn.setAttribute("id", "deleteButton")

  myTodos.appendChild(ulNewTask)

  // myTodos.appendChild(date)

  // myTodos.appendChild(xBtn)

  document.getElementById("new-task-description").value = ""

  // deleteTask()
  

}

// function deleteTask(){
//   // let deleteBtn = document.getElementById("deleteButton")
//   // deleteBtn.addEventListener("click", function(){
//   //   console.log("will delete soon")
//   // })
// }

function dateStamp(){
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const dateString = (currentMonth + 1) + "-" +  currentDayOfMonth + "-" + currentYear


  return `Date: ${dateString}`
  }

