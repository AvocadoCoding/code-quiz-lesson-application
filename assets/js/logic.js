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

function firstQuestion(){
// Remove existing elements in main section of page
startScreen.setAttribute("style","display:none;");
    
    
// Add new elements to page
questions.setAttribute("style","display:inline;");
questionTitle.textContent = "Test";       
}
    
function startTimer(){
    timeCounter.textContent="75";
}

function btnTrigger(){
    console.log("test");
    firstQuestion();
    // startTimer(); 
}


startButton.addEventListener = ("click", btnTrigger());



// Add an apendchild function to render question and list of answers, each answer
// must be a button




// When question is completed, change window location to open the 'highscores.html' file