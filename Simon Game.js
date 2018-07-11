
 //under construction......stay tuned

/* My goal is that none of the buttons on the simon game (including the colored pads) can work when Simon Game is off (on/off toggle button), but as soon as you press the "Start" button after turning the game on, a random sequence of buttons presses (these light up) is generated via a getRandom function.


"Simon Game is a simple game which goal is for user to repeat the pattern showed by the program. 
With each round a new step is added to the pattern making, the game much more difficult with every round. 
Additionally, the program should play a different sound for each field that is activated. 
On top Of that you have to enable user to switch between strict mode, which restarts a game whenever user selects wrong field in a pattern, and normal mode which only repeats the pattern subsequent of the wrong button being pressed. 
The provided example constituted of 4 different fields with different color for each field and I followed with the same idea."
*/
/*
I might like to achieve my goals using a state method employing usage of MOBX (mobx.js.org/index.htmL) 
*/





function play(sound){
   var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
  //setAttribute() method adds specified attribute to element, and gives it specified value. If specified attribute already exists, only value is set/changed
   audio.play();  
}


$(document).ready(function(){ 

var simonGamePlays = [];
var simonGameUserPlays = [];
const LEVELS_TO_REACH = 20;
var id, color, level = 0;
var i;
var on;
var off;
var strict;

/* 
greenButton();
redButton();
yellowButton();
blueButton();
*/
  
/*....................start button functions.......................*/  
  
$("#start").click(function(){
  beginSequence();
 $('.count-display').removeClass("on");
 $('.count-display').addClass("on").html("this is level 01");
  strict = false;
  level = 0;
  level++;
  simonGamePlays = []; // simon Game array stores Simon input to be compared against user
  simonGameUserPlays = []; //simon game user array stores user input tob compared against Simons input
  //simonGamePlayerSequence(); function for Simon Game Player array

  const buttons = document.getElementsByClassName('pad'); //retrieve the elements of a particular item which are the pads 

  if(buttons.length > 0) { //as long as greater than 0, can be two buttons, etc
    function getRandomIndex(){
      var random = Math.floor(Math.random() * 4);
      
      // KK: Maybe instead of .click here just imitate the behavior instead of actually
      // faking a click

      // Then in the illuminate function, actually push the user's data into the
      // array because you can be sure the user clicked on it instead of the computer

      buttons.item(random).click(); //randomIndex is parameter of item
      simonGamePlays.push(random);
  };
};
});  
    
/*........on/of toggle switch functions..................*/

    $(".tgl-btn").click(function() {
      if (!on){
            
        $('.count-display').addClass("on").html("Ready? Lets go!");
       on = true  
      }                 
      else {
        on = false;
        $('.count-display').removeClass("on").html("888888888888888"); // turn display light off
        $('.light').removeClass("light-glow")//turn strict light off
      }
    }); 
 

$('.tgl-btn').click(function(){
	$(".Linkedinbutton, .Facebookbutton, .Tweetbutton, .Emailbutton ").toggleClass("Linkedinbutton-X")
 
function toggle() {
    if(shown) {
        element.hide();
        shown = false;
    } else {
        element.show();
        shown = true;
    }
}
});
  
  
/*..............Simon Game Plays (Simon sequence)..............*/ 
  
function beginSequence(){
    var i = 0; //everytime function starts, it starts with i set to zero
    var simonUserInterval = setInterval(function() {
      // KK: If you want this variable to be accessible here, you either need to
      // pass it in or put it in global scope

      id = simonGamePlays[i]; //this id to be found with Math.random function
      color= $("#"+id).attr("class");
      //attribute to this id the classes for it (in CSS)
      console.log(id+" "+color); //print id and color eg. 0 and green
      //implement an if statement that would clear the setInterval variable
      
      // KK: you need to actually pass the variables into the function
      addPadClassSound(id, color); //going to pull a class
    i++;
    if (i == simonGamePlays.length){ 
      //if statement that clears setInterval variable
      clearInterval(simonUserInterval);
    }
}, 1000);
}


/*.........add interval pad class and sound...................*/
  
/**/
function addPadClassSound(id, color){
  $("#" + id).addClass(color + "lightup"); //soon as function starts want to target that specific id
  //playAudio(id); //play sound function (corresponds to other sound function preceeding)
  setTimeout (function(){ //ends the usage of this class and brings next class into view
  $("#"+ id).removeClass(color + "lightup");
  }, 500); //time for delay for function to execute
}

/*........play Simon pad sounds.......................*/ 
/*  
  function playSound(id){
    
  }
  
*/  
  
  // KK: Removing commented out lines, it will always be accessible in version control
  // if we decide we need it later
  
/*
strict button workings...concepting operating concept
when strict button is pressed count is immediately reset 
strict button function will not work when start button is off
strict button light turns on when strict button is pressed
strict button function turns off when on/off button is turned off
*/  
      
$('#strict').click(function(){
	$('.light').toggleClass('light-glow')
//make part of video-screen text blink 
//var element = $(".light-glow");
//var shown = true;
//setInterval(toggle, 100);

function toggle() {
    if(shown) {
        element.hide();
        shown = false;
    } else {
        element.show();
        shown = true;
    }
}
});
  
  // KK: Let's decide whether to use jQuery click functions or vanilla JS click functions
  // instead of mixing and matching

 //share-links code:
//LinkedIn
$('.Linkedinbutton').click(function() {
  var shareurl = $(this).data('shareurl');
  window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://codepen.io/IDCoder/full/Gxqybw/' + escape(shareurl) + '&title=' + document.title + '&source=SourceTitle&target=new');
  return false;
});

//Twitter  
  var text="Checkout this Simon Game Web App";
 $('.Tweetbutton').click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text + " " +"https://codepen.io/IDCoder/full/Gxqybw/"));
  });

//Facebook  
 // KK: document.querySelector can use jQuery-like syntax
 var facebookShare = document.querySelector('.Facebookbutton');

facebookShare.onclick = function(e) {
  e.preventDefault();
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
  if(facebookWindow.focus) { facebookWindow.focus(); }
    return false;
};

//Email under construction
var emailWindowSettings = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=200px,height=120px';

$(".Emailbutton").on("click", function() {
  var emailWindow = window.open(this.dataset.href,'targetWindow', emailWindowSettings);
  return false;
}); 
});
