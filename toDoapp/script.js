const inputBox =
  document.getElementById("task-input");

const taskList =
  document.querySelector("#task-list");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// To save the data in the local storage
function saveData() {
  localStorage.setItem(
    "data",
    taskList.innerHTML
  );
}
// To show the data on refreshing or closing browser
function showTask() {
  taskList.innerHTML =
    localStorage.getItem("data");
}
showTask();
