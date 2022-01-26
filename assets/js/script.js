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
let endTime = 0;
let score = 0;
let timeInter = 0;



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
const q09 = new Question('What is the correct way to write a JavaScript array?', ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'colors = red, green, blue'], 1)
const q10 = new Question('How do you round the number 7.25, to the nearest integer?', ['Math.rnd(7.25)', 'rnd(7.25)', 'Math.round(7.25)', 'Round(7.25)'], 2)
const q11 = new Question('Which event occurs when the user clicks on an HTML element?', ['onclick', 'onmouseover', 'onmouseclick', 'hover'], 0)
const q12 = new Question('How do you declare a JavaScript variable?', ['variable carName;', 'v carName;', 'carName.isVariable;', 'var carName;'], 3)
const q13 = new Question('Which operator is used to assign a value to a variable?', ['+', '=', '*', '-'], 1)
const q14 = new Question('What is the correct syntax for referring to an external script called "xxx.js"?', ['<script href="xxx.js">', '<script === xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">'], 2)
const q15 = new Question('How does a WHILE loop start?', ['while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)', 'do while i === i'], 0)


const questArray = [q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12 , q13, q14, q15]
let usedQs = []
let newArray = []
let qsUsed = []
let qsLeft = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let next = 20
let stopRandom = false

let currentQuestion = 20
let userAnswer = 20
let correctAnswer = 20


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
      gameOver()
    }
    if (usedQs.length>14&&newArray.length<1) {
      gameOver()
    }

  }
  
  
  // Starts timer and shows table wih Questions
  function startGame() {
    if (startTime===0) {
    timeInter = setInterval(timeFunction,1000)
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
    let rand = Math.floor(Math.random()*15)
    displayQs(rand)
  }
  
  
function displayQs(num){
  let randQ = num
  currentQEl.textContent = questArray[randQ].text
  ansBtn1.textContent = questArray[randQ].choices[0]
  ansBtn2.textContent = questArray[randQ].choices[1]
  ansBtn3.textContent = questArray[randQ].choices[2]
  ansBtn4.textContent = questArray[randQ].choices[3]
  correctAnswer = questArray[randQ].correct
  console.log("Correct Ans is:")
  console.log(correctAnswer)
  usedQs.push(randQ)
}

function randomizer(){
  let rand = Math.floor(Math.random()*15)
  return rand
}

// function tryAgain(){
//   console.log("I'm here")
//   nextQ()
// }

function nextQ (){

  if ( !stopRandom ) {
    next = randomizer()
    if(qsLeft.includes(next)&&qsUsed.length<9){
      qsUsed.push(next)
    } else {
      for (let i = 0; i < qsLeft.length; i++) {
        if (!qsUsed.includes(i)) {
          newArray.push(i)
          stopRandom = true
        } 
      }
    }
  } 
  else {
    if (newArray.length>0) {
      next = newArray.shift()
    }
  }
displayQs(next)
}


function gameOver(){
  endTime = moment().format("X");
  console.log("used Qs below")
  console.log(usedQs)
  console.log(newArray)
  score = endTime - startTime
  score = score * usedQs.length
  console.log("Total Score")
  console.log(score)
  clearInterval(timeInter)
  gameTable.classList.add('d-none');
  // titleEl.classList.add('d-none');
  // startBtn.classList.remove('d-none');
  scoresTable.classList.remove('d-none')
}


function userAns0(){checkAnswer(0)}
function userAns1(){checkAnswer(1)}
function userAns2(){checkAnswer(2)}
function userAns3(){checkAnswer(3)}


function checkAnswer (num){
  if (correctAnswer!==num&&timeLeft>5) {
    timeLeft = timeLeft-5
  }
  nextQ()
}


  // Event listeners 
  startBtn.addEventListener('click', startGame)
  ansBtn1.addEventListener('click', userAns0)
  ansBtn2.addEventListener('click', userAns1)
  ansBtn3.addEventListener('click', userAns2)
  ansBtn4.addEventListener('click', userAns3)




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
  
  
  






  