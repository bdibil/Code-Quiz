const scoresTable = document.getElementById('scores')
const gameTable = document.getElementById('game')
const titleEl = document.getElementById('title')
const startBtn = document.getElementById('start')

const currentQEl = document.getElementById('currentQ')
const ansBtn1 = document.getElementById('ans1')
const ansBtn2 = document.getElementById('ans2')
const ansBtn3 = document.getElementById('ans3')
const ansBtn4 = document.getElementById('ans4')



// const startBtnEl = $('#startBtn');

var startTime = 0;
var timeLeft = 60;
var timeNow = 0;
var timeDelta = 0;
var dummy = 10;



// Constructor function for questions
function Question(text, choices, correct) {
    this.text = text;
    this.choices = choices;
    this.correct = correct;
}

// Define all questions
const q01 = new Question('Inside which HTML element do we put the JavaScript?', ['<js>', '<javascript>', '<script>', '<scripting>'], 2)
const q02 = new Question('How do you write "Hello World" in an alert box?', ['alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");'], 0)
const q03 = new Question('How do you create a function in JavaScript?', ['create.myFunction()', 'function = myFunction()', 'function:myFunction()', 'function myFunction()'], 3)
const q04 = new Question('How to write an IF statement in JavaScript?', ['if i = 5 then', 'if (i == 5)', 'if i == 5 then', 'if i = 5'], 1)
const q05 = new Question('How do you call a function named "myFunction"?', ['call myFunction()', 'call function myFunction()', 'myFunction()', 'hey myFunction()'], 2)
const q06 = new Question('How to write an IF statement for executing some code if "i" is NOT equal to 5?', ['if i != 5 then', 'if (i <> 5)', 'if (i != 5)', 'if i =! 5'], 2)
const q07 = new Question('How does a FOR loop start?', ['for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)', 'for (i = 0; i <= 5)', 'for i = 1 to 5'], 0)
const q08 = new Question('How can you add a comment in a JavaScript?', ['<!--This is a comment-->', '‘*This is a comment', 'add.comment(This is a comment)', '//This is a comment'], 3)
const q09 = new Question('What is the correct way to write a JavaScript array?', ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"'], 1)
const q10 = new Question('How do you round the number 7.25, to the nearest integer?', ['Math.rnd(7.25)', 'rnd(7.25)', 'Math.round(7.25)', 'Round(7.25)'], 2)
const q11 = new Question('Which event occurs when the user clicks on an HTML element?', ['onclick', 'onmouseover', 'onmouseclick', 'hover'], 0)
const q12 = new Question('How do you declare a JavaScript variable?', ['variable carName;', 'v carName;', 'carName.isVariable;', 'var carName;'], 3)
const q13 = new Question('Which operator is used to assign a value to a variable?', ['+', '=', '*', '-'], 1)
const q14 = new Question('What is the correct syntax for referring to an external script called "xxx.js"?', ['<script href="xxx.js">', '<script === xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">'], 2)
const q15 = new Question('How does a WHILE loop start?', ['while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)'], 0)

const questArray = [q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12 , q13, q14, q15]



// Timer function handler 
function timeFunction(){
  
    if (timeLeft>0) {
      timeLeft--
      dummy++
      // console.log(timeLeft);
    }
    timeNow = moment().format("X");
    timeDelta = timeNow-startTime;
    $("#t1").text(timeLeft);

    if (timeLeft===0) {
      dummy = 0
    //   console.log(timeNow);
    }
  
  }
  

// Starts timer and shows table wih Questions
function startGame() {
  if (startTime===0) {
    setInterval(timeFunction,1000)
    startTime = moment().format("X");
    console.log(startTime);
  }
  if (dummy===0) {
      startTime = moment().format("X");
      console.log(startTime);
      timeLeft = 10
  }
    gameTable.classList.remove('d-none');
    titleEl.classList.add('d-none');
    startBtn.classList.add('d-none');
    displayQs()
}
  

function displayQs (){
  currentQEl.textContent = q01.text
  ansBtn1.textContent = q01.choices[0]
  ansBtn2.textContent = q01.choices[1]
  ansBtn3.textContent = q01.choices[2]
  ansBtn4.textContent = q01.choices[3]

}



  // Event listener Start Btn
  startBtn.addEventListener('click', startGame)




  // startBtnEl.on('click', function() {
  //   if (startTime===0) {
  //     setInterval(timeFunction,1000)
  //     startTime = moment().format("X");
  //     console.log(startTime);
  //   }
    
  //   if (dummy===0) {
  //       startTime = moment().format("X");
  //       console.log(startTime);
  //       timeLeft = 10
  //   }
  //   // startGame()
  // });
  
  
  






  