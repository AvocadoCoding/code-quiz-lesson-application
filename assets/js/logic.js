//Remove all local storage items:
// localStorage.clear();

/* window.addEventListener("load",{
    console.log("page is fully loaded");
});
 */

// Add an event button to start quiz- goes to first question and starts timer
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var timeCounter = document.querySelector("#time");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");




function firstQuestion(){
// Remove existing elements in main section of page
startScreen.setAttribute("style","display:none;");
    
    
// Add new elements to page
questions.setAttribute("style","display:block; justify-content: center");
questionTitle.textContent = "Test";       


var buttonOne = document.createElement('button');
choices.appendChild(buttonOne);
buttonOne.textContent = "1. Testing button text content"

var buttonTwo = document.createElement('button');
choices.appendChild(buttonTwo);
buttonTwo.textContent = "2. Testing button text content"

var buttonThree = document.createElement('button');
choices.appendChild(buttonThree);
buttonThree.textContent = "3. Testing button text content"

var buttonFour = document.createElement('button');
choices.appendChild(buttonFour);
buttonFour.textContent = "4. Testing button text content"

}
    
function startTimer(){
    timeCounter.textContent="75";
}

function btnTrigger(){
    console.log("test");
    firstQuestion();
    startTimer(); 
}

startButton.addEventListener("click", btnTrigger);


// Add an apendchild function to render question and list of answers, each answer
// must be a button




// When question is completed, change window location to open the 'highscores.html' file