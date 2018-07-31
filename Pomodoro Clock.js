 //.....under experimentation/construction.......




let seconds = 60; const secondsPassed = (e) => { console.log("wowo") 
//inside this function, new variable called minutes let minutes = Math.round((seconds-30)/60); 
//now going to add another variable inside function for remaining seconds 
let remainingSeconds = seconds % 60; 

if (remainingSeconds < 10){ 
remainingSeconds = "0" + remainingSeconds; 
}

 //Output the result in an element with id="number" e.innerHTML = minutes + ":" + remainingSeconds

 //once remaining seconds reach none, interval is over so write some text 
 if( seconds == 0){ clearInterval("number"); e.innerHTML= 'Buzz!!'; 
 //temporary placeholder....will link to a buzz sound later 
 }else{ 
 seconds--; //decrements 
 } 
 }

const startCountDown = () => { 

var myvar = setInterval(() => 
secondsPassed(document.getElementById("number")), 1000) 
} 

$(document).ready(() => 

{ 

$(".start-resume").click(function(){

	 $('#number').addClass("on"); 
	 startCountDown(); 
 }); 

});

	

	$('.start-resume').click(function(){ 
	            $('#number').addClass("on"); 
	}); 

	$(".state-2").click(function(){ 
	    $(".radar-background").hide(); 
	});

	$(".state-1").click(function(){ 
	    $(".radar-background").show(); 
	});   

