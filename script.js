var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");
var button = document.querySelector("button");

//Added event listeners 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setGradientRandom);
body.addEventListener("onload", exhibitBackground());


//Original function to set gradient of background 
function setGradient(){
body.style.background = 
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
css.textContent = body.style.background + ";";
}

//Another function I made so that I change the background once more but for button
function setGradient2() {
	css.textContent = body.style.background + ";";
}

//Found on StackOverFlow
//https://stackoverflow.com/questions/49329179/random-hex-color
function hexGenerator() { 
	return '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
}

//Prints out on the message what randon number it finds on Hex and prints into RGB.
function setGradientRandom() {

	//Calls hexGenerator to generate random rgb values to the background
	body.style.background = "linear-gradient(to right, " + hexGenerator() + "," + hexGenerator() + ")";

	//calls setGradient2 on here so it says on the text
	setGradient2();
}




// color1.addEventListener("input", function(){
// body.style.background = 
// "linear-gradient(to right, " 
// + color1.value 
// + ", " 
// + color2.value 
// + ")";
// css.textContent = body.style.background + ";";
// })

// color2.addEventListener("input", function(){
// body.style.background = 
// "linear-gradient(to right, " 
// + color1.value 
// + ", " 
// + color2.value 
// + ")";
// css.textContent = body.style.background + ";";
// })