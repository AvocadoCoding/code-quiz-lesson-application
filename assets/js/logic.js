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
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");

// Variable needed to count number of qustions asked?
var questionNumber = 0;

// Text feedback for user afer answering a question
feedback= "";

// Timer start time
var secondsLeft = 75;
// Declare timerInterval as a global funciton so I can call it in two different functions
var timerInterval;

// Variables for initial entry
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

function renderQuestion(){
   
    // Remove existing elements in main section of page
    startScreen.setAttribute("style","display:none;");

    
    // Add new elements to page, take question information from question array

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
            if (questionNumber < questions.length){
                renderQuestion();
            }else {
                stopTimer();
            }
        }else{
            console.group("wrong");
            // play "wrong" sound effect
            sfxWrong.play();
            feedback = "Wrong!";
            secondsLeft= secondsLeft - 15;
            console.log(secondsLeft);
            questionNumber++;
            if (questionNumber < questions.length){
             renderQuestion();
            }else {
            stopTimer();
            }
        };
    }
}

// Timer countdown starts in incremements of 1000ms
function startTimer() {
    // Timer countdown starts in incremements of 1000ms
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeCounter.textContent=secondsLeft;
    
    console.log(timerInterval);

        if(secondsLeft <= 0) {
            // If seconds left is smaller than or equal to zero then stop timer
            stopTimer();
          }
            // set above to smaller than or equal to 0, then becomes 0

    }, 1000); 
}

function stopTimer(){
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // If statement to adjust time if it falls below 0
    if (secondsLeft >= 0){
        secondsLeft = secondsLeft;
    } else{
        secondsLeft = 0;
    }
    //Show finishing time
    timeCounter.textContent=secondsLeft;
    // Store finishing remaining time value to local storage
    // localStorage.setItem("Score", secondsLeft);

    // Calls function to create and append image
    renderAllDone();
}

function renderAllDone(){
// Remove default existing elements in main section of page
startScreen.setAttribute("style","display:none;");

// Hide questions section
questionsSection.setAttribute("style","display:none;");

// Make end screen visible
endScreen.setAttribute("style","display:block; justify-content: center");

// Write user score
finalScore.textContent = secondsLeft;
}


// Start button function- goes to first question and starts timer
function btnTrigger(){
    console.log("test");
    console.log(questions[questionNumber].title);
    renderQuestion();
    startTimer(); 
}

// CLearing user feedback text when user clicks in box to enter initials
initials.addEventListener("click", function (event) {
    event.preventDefault();
    userFeedback.setAttribute("style","display:none;");
});

// Submitting initials
submit.addEventListener("click", function (event) {
    event.preventDefault();
    userInitials = initialsInput.value.trim();
    // Return from function early if submitted entry is blank
    if (userInitials === "") {
      return;
    }else{
        //Store user input in local storage to collect on highscores page, and
        // function to get values from local storage
        var existingUserEntries = JSON.parse(localStorage.getItem("User") || "[]");
        existingUserEntries.push(userInitials);
        localStorage.setItem("User", JSON.stringify(existingUserEntries));
        initialsInput.value ="";
        var existingScoreEntries = JSON.parse(localStorage.getItem("Score") || "[]");
        existingScoreEntries.push(secondsLeft);
        localStorage.setItem("Score", JSON.stringify(existingScoreEntries));
        // go to highscores page
        window.location.href="highscores.html";
    } 
  });



// Event button to start quiz
startButton.addEventListener("click", btnTrigger);


// Add an apendchild function to render question and list of answers, each answer
// must be a button

