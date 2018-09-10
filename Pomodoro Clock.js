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

/*
 * I ran a small script/program called Prettier over the file here, it does
 * formatting based on some generally agreed upon code style choices. There's no
 * one "right way" to format the text that is one's code, but consistency is key.
 *
 * I like using an automated tool like that because it's one less thing to think
 * about, but might not be something you have access to always. Formatting (indentation,
 * semicolons or not, etc..) doesn't have an impact on how the code runs, but it
 * will make the code a little easier to digest at a glance, keep it more
 * organized, and that sort of thing. If someone is evaluating a bit of code for
 * a job application etc, formatting will matter because it shows an attention to
 * "completeness" or detail, something like that.
 *
 * Messy formatting can also give an interviewer a reason to discard an applicant.
 * It might not be totally fair because someone could be an excellent candidate,
 * but when an interviewer needs to churn through dozens of code samples, it's
 * important to not give them trivial "easy" ways to cross someone off the list
 * and move on, because likely they'll take that opportunity.
 */
$(document).ready(() => {
  let seconds = 60; //(duration for timer to run)
  var myTimer;

  /*
 * "e" isn't a very descriptive variable name, and is going to require remembering
 * or looking to where the function is called to understand what it is.
 * Is there a more semantic name? Something like.. numberDisplayElement etc?
 * Variable names are where we have an opportunity to make the code more read-
 * able, and easier to work on without adding extra brainpower to remember what
 * it means.
 *
 * It's also a convention you'll see a lot to use `e` to represent the event
 * object from an event listener. I think `event` is better, but `e` generally
 * already "means something" else for most JS devs.
 */
  const secondsPassed = e => {
    console.log("yea mon time ah move yunno!");
    /*
    * I might just be missing something obvious here, but why the -30?
    * could we extract that operation into its own function so we can name it
    * and make it more descriptive about what its doing?
    */
    let minutes = Math.round((seconds - 30) / 60);

    /*
    * I like these few operations to transform the program's version of how
    * many seconds are left into a human ready display version.
    * Could we extract this functionality into its own function so all that logic
    * is abstracted away?
    */
    let remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds;
    }

    //Output the result in an element with id="number"
    e.innerHTML = minutes + ":" + remainingSeconds;

    /*
    * I'm a big proponent of trying to write code that reads as close to prose
    * as possible. JavaScript doesn't make that easy because the syntax calls for
    * all that extra punctuation, but it's still something to strive for.
    *
    * Using this little bundle of code as an example, can we think of a way to
    * take what is essentially one step of the process (what do we do at the end
    * of the interval callback) can we wrap it in a function and give it a name
    * that describes what it does? That way when someone looks at the main fun-
    * ction, it can read in a few function calls what happens 1, 2, 3
    */
    if (seconds == 0) {
      clearInterval("number"); //countdown ends and ceases numeric display
      e.innerHTML = "Buzz!!"; //..and will display the alphabetic display, "Buzz!!"....temporary placeholder....will link to a buzz sound later
    } else {
      seconds--; //decrements as long as seconds do not equal zero
    }
  };

  const startCountDown = () => {
    var myTimer = setInterval(
      () => secondsPassed(document.getElementById("number")),
      1000
    ); //displays countdown per the number id from html sheet
  };

  //on button
  $(".state-1").click(function() {
    $("#number").addClass("on");
    $(".radar-background").show();
  });

  $(".start-resume").click(function() {
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
 /*
  * `.on("click")` vs. `.click()` is an interesting choice. Which one should we
  * use? Effectively, they're the same for the most part. Some people prefer `.on`
  * and some prefer `.click`. In this instance, with the application this is for,
  * `.on` could be a good choice, because it allows you to use `.off()` to rem-
  * ove the event listeners, if that's the route you want to take to handle
  * the on/off functionality. There are plenty of other ways to handle it too.
  *
  * The important note here I think is just consistency. If a dev chooses .click
  * then they should probably err on the side of always using .click unless
  * there is a code reason to use .on, like the .off use case.
  */
  $("#pause").on("click", function() {
    clearInterval("number");
  });

  //off button

  $(".state-2").click(function() {
    clearInterval();
    $("#number").removeClass("on");
  });

  //stop/reset button

  $(".stop-reset").click(function() {
    clearInterval(myTimer);
  });

  $(".state-2").click(function() {
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
