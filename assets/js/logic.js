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
var questionsSection = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");


// Variable needed to count number of qustions asked?
var questionNumber = 0;



function renderQuestion(){
// Remove existing elements in main section of page
startScreen.setAttribute("style","display:none;");
    
// Remove first page content, add new elements to page, take question information 
// from question array

questionsSection.setAttribute("style","display:block; justify-content: center");

questionTitle.textContent = questions[questionNumber].title;  

loadButtons(questionNumber);

function loadButtons(){
for (var i = 0; i < questions[questionNumber].choices.length; i++){
    var answerButton = document.createElement('button');
    choices.appendChild(answerButton);
    answerButton.textContent = questions[questionNumber].choices[i];
    answerButton.setAttribute("dataIndex", i); 
    answerButton.addEventListener("click", userChoice);
}
}

function userChoice(event){
    event.preventDefault();
    let index = event.target.getAttribute("dataIndex");
    var userAnswer = questions[questionNumber].choices[index];
    if(userAnswer === questions[questionNumber].answer){
        console.log("correct");
    }else{
        console.group("wrong")
    };


}


//Counts a new question every time funciton run, can repeat for multiple qustions
// count++;    
// Continue asking questions until count = questions.length ie. questions array length

}
    
function startTimer(){
    timeCounter.textContent="75";
}

function btnTrigger(){
    console.log("test");
    console.log(questions[questionNumber].title);
    renderQuestion();
    startTimer(); 
}


startButton.addEventListener("click", btnTrigger);


// Add an apendchild function to render question and list of answers, each answer
// must be a button

