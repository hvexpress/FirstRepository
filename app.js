//New Array
var array = [];

//Prompt user for a string
array.push(prompt("Yo buddy, What's up?"));

var h2 = document.getElementById("bodyManipulation");

var addText = document.createTextNode(array);

document.body.appendChild(addText);

alert('Dude, I totally agree!');