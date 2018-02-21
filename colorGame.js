var numbSquares=6;
var colors= [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay= document.getElementById("message");
var h1= document.querySelector("h1");
var resetButton= document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
//mode buttons event listners

setUpModeButtons();


// squares listners
setUpSquares()

	reset();
}



function reset(){
//generate all new colors
	colors= generateRandomColors(numbSquares);
	//pick a new random color from array
	pickedColor= colorPicked();          
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;

	resetButton.textContent="New Colors"


	messageDisplay.textContent="";

	for(var i=0; i< squares.length; i++){

		if(colors[i]){
	       squares[i].style.display="block";
		   squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}

	h1.style.backgroundColor="steelblue";

}
resetButton.addEventListener("click", function(){
	
	reset();
})


function setUpModeButtons(){

for( var i=0; i<modeButtons.length;i++){


	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numbSquares=3: numbSquares=6;
		reset();
		// if(this.textContent=== "Easy"){
		// 	numbSquares=3
		// }	else{
		// 	numbSquares=6;
		// }
		
	})
  }

}

function setUpSquares(){

for(var i=0; i<squares.length; i++){
	//add initial colord to square
	squares[i].style.backgroundColor= colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor= this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!"
			resetButton.textContent="Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		} else{

			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"
		}

	})
}

}

// easyBtn.addEventListener("click", function(){
// 	numbSquares=3
// 	//generate all new colors
// 	colors= generateRandomColors(numbSquares);
// 	//pick a new random color from array
// 	pickedColor= colorPicked();   
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent=pickedColor;
// 	for(i=0; i<squares.length; i++){
// 	  if(colors[i]){
// 	  	squares[i].style.backgroundColor=colors[i]; 	
// 	  } else{
// 	  	squares[i].style.display= "none"; 

// 	  }

// 	}

// })

// hardBtn.addEventListener("click", function(){
// 	numbSquares=6
// 	//generate all new colors
// 	colors= generateRandomColors(numbSquares);
// 	//pick a new random color from array
// 	pickedColor= colorPicked();   
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent=pickedColor;
// 	for(i=0; i<squares.length; i++){
// 	  	squares[i].style.backgroundColor=colors[i]; 	
// 	  	squares[i].style.display= "block"; 
// 	}

// })

//colorDisplay.textContent=pickedColor;




function changeColors(color){
	//loop through all the squares
	for (var i = 0; i <squares.length; i++) {
	//Change each color to match the given color 
	squares[i].style.backgroundColor=color;
	}


}

function colorPicked(){
	var random=Math.floor(Math.random() * colors.length)
	return colors[random];

}

function generateRandomColors(num){

	//make an array
	var arr=[]
	//add num random colors to array
	for(var i=0; i<num;i++){

		arr.push(randomColor());
	}
	//get random color and push to into arr
	//return array
	return arr;

}

function randomColor(){

	//pick a "red" from 0 -255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0 -255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0 -255
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}