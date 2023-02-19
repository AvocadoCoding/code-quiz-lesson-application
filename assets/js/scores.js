// Variables
var list = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");


var users = JSON.parse(localStorage.getItem("User"));
var scores= JSON.parse(localStorage.getItem("Score"));


//Loop to append user names and scores as list items to page
for (var i = 0; i < users.length; i++) {

var listItem = document.createElement('li');
listItem.textContent = (users[i]) + " - " + (scores[i]);
list.appendChild(listItem);

}

//event listener and function to remove list items
clearButton.addEventListener("click", function (event) {
event.preventDefault();
// Clears scores list
list.innerHTML="";
// CLears local storage
localStorage.removeItem('User');
localStorage.removeItem('Score');
});
