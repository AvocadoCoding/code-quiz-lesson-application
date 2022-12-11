// Variables
var list = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

var listItem = document.createElement('li');
listItem.textContent = localStorage.getItem("User") + " - " + localStorage.getItem("Score");
list.appendChild(listItem);