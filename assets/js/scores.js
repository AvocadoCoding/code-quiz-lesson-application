// Variables
var list = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

var listItem = document.createElement('li');
listItem.textContent = localStorage.getItem("User") + " - " + localStorage.getItem("Score");
list.appendChild(listItem);

//event listener and function to remove list item
clearButton.addEventListener("click", function (event) {
event.preventDefault();
list.removeChild(listItem);
});