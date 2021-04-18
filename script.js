var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

var colors = [color1, color2];

var body = document.getElementById("gradient");

var colorSection = document.querySelector("div");

var addButton = document.getElementById("addColor");
var removeButton = document.getElementById("removeColor");

var testButton = document.getElementById("test");

var colorVals = "";

function addColors(i, index, arr) {
	// colorVals = "";
	colorVals += i.value;
	if ((index + 1) < arr.length) {
		colorVals += ", ";
	}
	return colorVals
}

function setGradient() {
	colorVals = "";
	colors.forEach(addColors);
	body.style.background = "linear-gradient(to right, "
	+ colorVals + ")";
	css.textContent = body.style.background + ";"
}

function addBtn() {
	var listColors = document.getElementsByClassName("colors");
	var colorNum = "color" + (listColors.length + 1);
	var newColor = document.createElement("input");
	newColor.setAttribute("onInput", "setGradient()");
	newColor.setAttribute("class", "colors");
	newColor.setAttribute("id", colorNum);
	newColor.setAttribute("type", "color");
	newColor.setAttribute("name", colorNum);
	newColor.setAttribute("value", "#ff0000");
	colorSection.appendChild(newColor);
	colors.push(newColor);
}

function removeBtn() {
	if (colors.length > 2) { 
	lastColorId = "color" + colors.length;
	var deadColor = document.getElementById(lastColorId);
	deadColor.classList.add("animate__animated", "animate__fadeOut");
	setTimeout(function(){colorSection.removeChild(deadColor);}, 500);
	colors.pop();
	} else {
		alert("There's no point if there is only one color, friend.")
	}
}

addButton.addEventListener("click", addBtn);

removeButton.addEventListener("click", removeBtn);