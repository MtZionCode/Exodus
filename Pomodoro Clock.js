/*
Goals/Logic:
The on button should turn the clock on 
The pause button should be pause the clock at anytime during the clock's count-down process
The stop/reset button should be able to stop or reset the countdown timer at anytime during the countdown timer's countdown process
The start/resume button should be able to enable the clock to pickup from where it left off after pause button has been pressed
The off button should power off the clock. The off button should be able turn off the clock at anytime during the clock's count-down process
None of the functions for any button should be able to work when clock is off
None of the functions for any button should be able to work unless on button is pressed
The green circle visible when you turn the clock on is to be a CSS/javascript integrated piechart/radar device that will syn with count-down process 
*/


$(document).ready(() => {

let seconds = 60; //(duration for timer to run)
var myTimer;

const secondsPassed = (e) => {
    console.log("yea mon time ah move yunno!")
    //inside this function, new variable called minutes
    let minutes = Math.round((seconds-30)/60);
    //now going to add another variable inside function for remaining seconds
    let remainingSeconds = seconds % 60;
    
    if (remainingSeconds < 10){
        remainingSeconds = "0" + remainingSeconds;
    }

    //Output the result in an element with id="number"
    e.innerHTML = minutes + ":" + remainingSeconds

    //once remaining seconds reach none, interval is over, so write some text
    if( seconds == 0){
        clearInterval("number"); //countdown ends and ceases numeric display
        e.innerHTML= 'Buzz!!'; //..and will display the alphabetic display, "Buzz!!"....temporary placeholder....will link to a buzz sound later
    }else{
        seconds--; //decrements as long as seconds do not equal zero
    }
}

const startCountDown = () => {
    var myTimer = setInterval(() => secondsPassed(document.getElementById("number")), 1000) //displays countdown per the number id from html sheet
}

 //on button
 $('.state-1').click(function(){
 	$('#number').addClass("on");
  $(".radar-background").show(); 
 });


 $(".start-resume").click(function(){ 
    startCountDown(); //calls startCountDown function from above: "startCountDown = () => {}"
     //if paused, then click to resume(make a state for if myVar == -1)
     /*
     if (myTimer == -1){
      myVar = setInterval (function(){
      	seconds++;
        number.inerHTML = seconds;
        }, 1000);
        //else
        }else{
        clearInterval(myTimer);
        myTimer = -1
      }
    });
    */
     }); 
      //pause button
      $('#pause').on('click', function() {
      clearInterval("number")
      });
      
      //off button
      
      $('.state-2').click(function(){
 	clearInterval();
 	$('#number').removeClass("on"); 
  
 }); 
      
     //stop/reset button
     
     $('.stop-reset').click(function(){
       clearInterval(myTimer);
     });
     
        


	$(".state-2").click(function(){ 
	    $(".radar-background").hide(); 
	});


 
 /*
 function myTimer(){
  var status= false;
  var myInterval;
  $(".pause").click(function(){ 
   if(status === true){ 
            status = false;
            clearInterval(myInterval);

        }
        else{
            status = true;
            myInterval = setInterval(myTimer,1000);
        }

    });   
    }
    */
 
});

