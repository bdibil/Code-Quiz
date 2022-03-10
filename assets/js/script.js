const scoresTable = document.getElementById('scores')
const gameTable = document.getElementById('game')
const titleEl = document.getElementById('title')
const startBtn = document.getElementById('start')
const t1 = document.getElementById('t1')
const currentQEl = document.getElementById('currentQ')
const ansBtn1 = document.getElementById('ans1')
const ansBtn2 = document.getElementById('ans2')
const ansBtn3 = document.getElementById('ans3')
const ansBtn4 = document.getElementById('ans4')
const in1 = document.getElementById('in1')
const in2 = document.getElementById('in2')
const in3 = document.getElementById('in3')
const sco1 = document.getElementById('sco1')
const sco2 = document.getElementById('sco2')
const sco3 = document.getElementById('sco3')
const submitForm = document.getElementById('submitForm')
const submitBtn = document.getElementById('subBtn')
const resBtn = document.getElementById('resBtn')
const userInitials = document.getElementById('userInitials')


var startTime = 0;
var timeLeft = 60;
var timeNow = 0;
var timeDelta = 0;
var dummy = 10;
let endTime = 0;
let score = 0;
let timeInter = 0;
let scoresArray = []
let storedScores = []



// Constructor function for Questions and Highscores  
function Question(text, choices, correct) {
  this.text = text;
  this.choices = choices;
  this.correct = correct;
}

function Highscore(initials, score) {
  this.initials = initials
  this.score = score
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


const questArray = [q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12, q13, q14, q15]
let usedQs = []
let newArray = []
let qsUsed = []
let highScores = []
let qsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let next = 20
let stopRandom = false

let currentQuestion = 20
let userAnswer = 20
let correctAnswer = 20


// Timer function handler 
function timeFunction() {

  if (timeLeft > 0) {
    timeLeft--
    dummy++
  }
  timeNow = moment().format("X");
  timeDelta = timeNow - startTime;

  t1.textContent = timeLeft

  if (timeLeft === 0) {
    dummy = 0
    gameOver()
  }
  if (usedQs.length > 14 && newArray.length < 1) {
    gameOver()
  }

}

// Starts timer and shows table wih Questions
function startGame() {
  readHscores()
  if (startTime === 0) {
    timeInter = setInterval(timeFunction, 1000)
    startTime = moment().format("X");
    console.log(startTime);
  }
  if (dummy === 0) {
    startTime = moment().format("X");
    console.log(startTime);
    timeLeft = 10
  }
  gameTable.classList.remove('d-none');
  titleEl.classList.add('d-none');
  startBtn.classList.add('d-none');
  let rand = Math.floor(Math.random() * 15)
  displayQs(rand)
}

// Displays Questions to user
function displayQs(num) {
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

// Random Number gen
function randomizer() {
  let rand = Math.floor(Math.random() * 15)
  return rand
}

// Determines next question semi-randomly
function nextQ() {
  if (!stopRandom) {
    next = randomizer()
    if (qsLeft.includes(next) && qsUsed.length < 9) {
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
    if (newArray.length > 0) {
      next = newArray.shift()
    }
  }
  displayQs(next)
}

// Check user answers 
function userAns0() { checkAnswer(0) }
function userAns1() { checkAnswer(1) }
function userAns2() { checkAnswer(2) }
function userAns3() { checkAnswer(3) }
function checkAnswer(num) {
  if (correctAnswer !== num && timeLeft > 5) {
    timeLeft = timeLeft - 5
  }
  nextQ()
}

// Checks if game is over 
function gameOver() {
  endTime = moment().format("X");

  score = timeLeft * 2
  score += usedQs.length * 2
  clearInterval(timeInter)
  gameTable.classList.add('d-none');
  resBtn.classList.add('d-none');
  // startBtn.classList.remove('d-none');
  scoresTable.classList.remove('d-none')
  submitForm.classList.remove('d-none')
  updateScores()
}


// Store Scores in Local Storage
function readHscores (){
  storedScores = JSON.parse(localStorage.getItem("storedScores"));
  if (storedScores !== null) {
    scoresArray = storedScores
  } 
}

// Sends user's initial to saveScore()
function saveInitials() {
  let initials = userInitials.value
  saveScore(initials)
}

// Get initials from user and save score
function saveScore(initials) {
  let s = new Highscore (initials, score);
  scoresArray.push(s)
  localStorage.setItem("storedScores", JSON.stringify(scoresArray))
  updateScores()
  subBtn.classList.add('d-none');
  resBtn.classList.remove('d-none');
}

// Updates values of scores table
function updateScores(){
  if (scoresArray !== null) {
    scoresArray.sort((el1, el2) => el2.score - el1.score)
    let initArray = scoresArray.map(el => el.initials)
    let showScores = scoresArray.map(el => el.score)
    
    in1.textContent = initArray[0]
    in2.textContent = initArray[1]
    in3.textContent = initArray[2]
    sco1.textContent = showScores[0]
    sco2.textContent = showScores[1]
    sco3.textContent = showScores[2]
  } 
}


// Event listeners 
startBtn.addEventListener('click', startGame)
ansBtn1.addEventListener('click', userAns0)
ansBtn2.addEventListener('click', userAns1)
ansBtn3.addEventListener('click', userAns2)
ansBtn4.addEventListener('click', userAns3)
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  saveInitials()
})
resBtn.addEventListener('click', function (event){
  location.reload()
})

