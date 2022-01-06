// Use the correct selector `#` to select a button by its ID and not class
var startBtnEl = $('#startBtn');
var stopBtnEl = $('#stop-btn');

var startTime = 0;
var timeLeft = 90;
var timeNow = 0;
var timeDelta = 59;



// Change the event listener to `click` to make the event trigger on single-click


startBtnEl.on('click', function () {
  startTime = moment().format("X");
    $("#t2").text(startTime);    
    // timeNow = startTime+1;

    console.log(startTime)
    console.log(timeDelta)
 
    
    do {
      timeNow = moment().format("X");
      $("#t3").text(timeNow);
      timeDelta = timeNow-startTime;
      
      timeLeft = timeLeft-timeDelta
      
      $("#t1").text(timeLeft);
    
    
    } while (timeLeft>0);


    console.log(timeDelta)

    
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


  