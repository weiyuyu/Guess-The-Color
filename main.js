var num_squares = 6;
var colors = getRandomColors(num_squares);
var squares = document.querySelectorAll(".square");
var picked_color = pickColor();
var	color_display = document.getElementById("color_display");
var message_display = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset");
var easy_button = document.querySelector("#easy_button");
var hard_button = document.querySelector("#hard_button");


color_display.textContent = picked_color;

setSquareColors();

easy_button.addEventListener("click",function(){
	easy_button.classList.add("selected");
	hard_button.classList.remove("selected");
	num_squares = 3;
	colors = getRandomColors(num_squares);
	picked_color = pickColor();
	color_display.textContent = picked_color;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hard_button.addEventListener("click",function(){
	easy_button.classList.remove("selected");
	hard_button.classList.add("selected");
	num_squares = 6;
	colors = getRandomColors(num_squares);
	picked_color = pickColor();
	color_display.textContent = picked_color;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

reset_button.addEventListener("click",function(){
	colors = getRandomColors(num_squares);
	picked_color = pickColor();
	color_display.textContent = picked_color;
	message_display.textContent = "";
	setSquareColors();
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
});


function setSquareColors(){
	for(var i=0; i<squares.length; i++){
	//Set Colors
	squares[i].style.backgroundColor = colors[i];
	}
}

for(var i=0; i<squares.length; i++){
	//Event listeners
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === picked_color){
			message_display.textContent = "Correct.";
			ChangeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset_button.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			message_display.textContent = "Try Again.";
		}
	});
}

function ChangeColor(color){
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function getRandomColors(num){
	var arr = [];
	for(var i =0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var str = "rgb(" + r + ", " + g + ", " + b + ")";

	return str;
}

