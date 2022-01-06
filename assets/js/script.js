// Use the correct selector `#` to select a button by its ID and not class
var startBtnEl = $('#startBtn');
var stopBtnEl = $('#stop-btn');

var startTime = 0;
var timeLeft = 60;
var timeNow = 0;
var timeDelta = 0;
var dummy = 10;


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
  
  
  // Event listener Start 
  
  startBtnEl.on('click', function() {
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
  
  });
  
  
  






  // stopBtnEl.on('click', function () {
  //   if (timeDelta<60 && timeLeft>0) {
  //     // console.log(timeNow);
  //     timeNow = moment().format("X");
  //     $("#t3").text(timeNow);
  //     timeDelta = timeNow-startTime;

  //     timeLeft = timeLeft-timeDelta
      
  //     $("#t1").text(timeLeft);
  // }
    
  // });
  

  // while (timeNow>startTime) {
    
  // }  
  
  

  
   // startBtnEl.disabled = true;


  