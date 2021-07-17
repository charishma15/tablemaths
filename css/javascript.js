var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click on thw start/reset
document.getElementById("startreset").onclick = function() {
	

  //if we are playing
    if (playing == true)
	{
		location.reload(); //reload page
	}
else{// if we are not playing
	
	//change mode to playing
	playing = true;
	
	//set score to 0
	score = 0;
	document.getElementById("scorevalue").innerHTML = score;
	//show countdown box
	show("timeremaining");
//	document.getElementById("timeremaining").style.display = "block";
	timeremaining = 60;
	document.getElementById("timeremainingvalue").innerHTML = timeremaining;
	
	//hide game over box
	hide("gameOver");
	//change button to reset
	document.getElementById("startreset").innerHTML = "Reset Game";
	//start countdown
	startCountdown();
	//generate a new Q&A
	generateQA
	
	
    }
	
}
   //if we are playing
    //reload page
  //if we are not playing
     //set score to 0
    //show countdown box
   // reduce time by 1sec in loops
         //time left ?
             // yes -->continue
             //no --> game over
   //change button to reset
   // generate a new Q&A
//if we click on answer box
 // if we are playing
  // correct?
   //yes
      //increase score by 1
       // show correct box for 1sec
       //generate new Q&A
   //no
       //show try again box for 1sec

//functions
//start counter
function startCountdown(){
	action = setInterval(function(){
		timeremaining -= 1;
		document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		if(timeremaining == 0){//game over
			stopCountdown();
			show("gameOver");
//			document.getElementById("gameOver").style.display = "block";
			document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your Score is " + score +".</p>"
//			document.getElementById("timeremaining").style.display = "none";
//			
			hide("timeremaining");
			hide("correct");
			hide("wrong");
			playing = false;
			
			document.getElementById("startreset").innerHTML = "Start Game";
		}
			
	}, 1000);
	
}

//stop counter
function stopCountdown(){
	clearInterval(action);
}

//	hide an element			
		function hide(Id)
		{
			document.getElementById(Id).style.display = "none";
		}
//show an element
function show(Id){
	document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers
function generateQA()
{
	var x = 1+ Math.round(9*Math.random());
	var y = 1+ Math.round(9*Math.random());
	correctAnswer = x+y;
	document.getElementById("question").innerHTML = x + "x" + y;
	var correctPosition = 1+
		Math.round(3*Math.random());
	document.getElementById("box"+correctPosition).innerHTML =correctAnswer;//fill one box with the correct answer
	//fill other boxes with wrong answers
	for(i=1; i<5; i++)
		{
		if(i != correctPosition){
			var wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));//a wrong answer
			document.getElementById("box"+i).innerHTML = wrongAnswer;
		}
	}
}