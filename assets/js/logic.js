// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// Event button to start quiz- goes to first question and starts timer
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var timeCounter = document.querySelector("#time");
var questionsSection = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var userFeedback = document.querySelector("#feedback");

// Variable needed to count number of qustions asked?
var questionNumber = 0;

// Text feedback for user afer answering a question
feedback= "";

function renderQuestion(){
// Remove existing elements in main section of page
startScreen.setAttribute("style","display:none;");

    
// Remove first page content, add new elements to page, take question information 
// from question array

questionsSection.setAttribute("style","display:block; justify-content: center");

questionTitle.textContent = questions[questionNumber].title;  

loadButtons(questionNumber);

function loadButtons(){
//Clear choices button list
choices.innerHTML = "";
//For loop to add new button list
for (var i = 0; i < questions[questionNumber].choices.length; i++){
    var answerButton = document.createElement('button');
    choices.appendChild(answerButton);
    answerButton.textContent = questions[questionNumber].choices[i];
    answerButton.setAttribute("dataIndex", i); 
    answerButton.addEventListener("click", userChoice);
}
}

userFeedback.textContent = feedback;

function userChoice(event){
    event.preventDefault();
    let index = event.target.getAttribute("dataIndex");
    var userAnswer = questions[questionNumber].choices[index];
    if(userAnswer === questions[questionNumber].answer){
        console.log("correct");
        // play "right" sound effect
        sfxRight.play();
        feedback = "Correct!";
        questionNumber++;
        renderQuestion();
    }else{
        console.group("wrong");
        // play "wrong" sound effect
        sfxWrong.play();
        feedback = "Wrong!";
        questionNumber++;
        renderQuestion();
    };


}


//Counts a new question every time funciton run, can repeat for multiple qustions
// count++;    
// Continue asking questions until count = questions.length ie. questions array length

}
    
function startTimer(){
    timeCounter.textContent="75";
}

// Start button function- goes to first question and starts timer
function btnTrigger(){
    console.log("test");
    console.log(questions[questionNumber].title);
    renderQuestion();
    startTimer(); 
}

// Event button to start quiz
startButton.addEventListener("click", btnTrigger);


// Add an apendchild function to render question and list of answers, each answer
// must be a button

