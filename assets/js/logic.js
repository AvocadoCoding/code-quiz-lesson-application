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
var count = 0;



function firstQuestion(){
// Remove existing elements in main section of page
startScreen.setAttribute("style","display:none;");
    
// Remove first page content, add new elements to page, take question information 
// from question array

questionsSection.setAttribute("style","display:block; justify-content: center");

questionTitle.textContent = questions[count].title;  

var buttonOne = document.createElement('button');
choices.appendChild(buttonOne);
buttonOne.textContent = questions[count].choices[0];
buttonOne.setAttribute("dataIndex", 0); 
buttonOne.addEventListener("click", userChoice);

var buttonTwo = document.createElement('button');
choices.appendChild(buttonTwo);
buttonTwo.textContent = questions[count].choices[1];
buttonTwo.setAttribute("dataIndex", 1); 
buttonTwo.addEventListener("click", userChoice); 

var buttonThree = document.createElement('button');
choices.appendChild(buttonThree);
buttonThree.textContent = questions[count].choices[2];
buttonThree.setAttribute("dataIndex", 2); 
buttonThree.addEventListener("click", userChoice); 

var buttonFour = document.createElement('button');
choices.appendChild(buttonFour);
buttonFour.textContent = questions[count].choices[3];
buttonFour.setAttribute("dataIndex", 3); 
buttonFour.addEventListener("click", userChoice); 

function userChoice(event){
    event.preventDefault();
    let index = event.target.getAttribute("dataIndex");
    var userAnswer = questions[count].choices[index];
    if(userAnswer === questions[count].answer){
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
    console.log(questions[count].title);
    firstQuestion();
    startTimer(); 
}


startButton.addEventListener("click", btnTrigger);


// Add an apendchild function to render question and list of answers, each answer
// must be a button

