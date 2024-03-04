/*

Officer: 3523094
CaseNum: 701-3-35249470-3523094

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from randee dorcey.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They brobably weigh between 73 and 87 kg. 
They were fairly tall, I think between a height of 170 and 184 cm. 
They had thick black hair. 
I'll never forget their green eyes. 
They were wearing a green army coat. 
I'm not quite sure. Their expression seemed empty. 
They wore very thin glasses. 
It was so scary! It was very dark and I could barely see, I distinctly remember that they were wearing a pink scarf,
 I remember thinking that was quite unusual. They seemed to be between the age of 32 and 48 years old. That's all I know officer. 

*/

var lineupLog = [
	{
		"name": "JESUS JACQUELIN",
		"hair": "thick black",
		"item": "pink scarf",
		"eyes": "green",
		"glasses": "very thin",
		"age": 33,
		"weight": 80,
		"height": 172
	},
	{
		"name": "ERMELINDA PORTOS",
		"hair": "dark brown",
		"item": "orange socks",
		"eyes": "grey",
		"glasses": "thin metallic",
		"age": 43,
		"weight": 76,
		"height": 179
	},
	{
		"name": "JACQUELINE MYRLE",
		"hair": "ginger",
		"item": "net weave shirt",
		"eyes": "pale",
		"glasses": "cheap plastic",
		"age": 36,
		"weight": 78,
		"height": 162
	},
	{
		"name": "MAJORIE WILLMAR",
		"hair": "short black",
		"item": "pair of leather trousers",
		"eyes": "black",
		"glasses": "dark brown",
		"age": 41,
		"weight": 89,
		"height": 189
	},
	{
		"name": "LAKESHA COURTWOOD",
		"hair": "shaved",
		"item": "dotted necktie",
		"eyes": "brown",
		"glasses": "black",
		"age": 44,
		"weight": 72,
		"height": 179
	},
	{
		"name": "SUMMER CASIMERE",
		"hair": "white",
		"item": "red necktie",
		"eyes": "pale",
		"glasses": "light tan",
		"age": 52,
		"weight": 76,
		"height": 172
	},
	{
		"name": "DARBY ASHELY",
		"hair": "long white",
		"item": "fur vest",
		"eyes": "grey",
		"glasses": "white",
		"age": 43,
		"weight": 82,
		"height": 175
	}
];

var myFont;
var backgroundImg;
// var matches;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(640, 480);
	textFont(myFont);
}

// Declare both your functions here
function matchSuspect(suspectObj) {
	//suspectObj = lineupLog;
	var matches = 0;

	if (suspectObj.weight > 73 && suspectObj.weight < 87) {
		matches++;
	}

	if (suspectObj.height > 170 && suspectObj.height < 184) {
		matches++;
	}

	if (suspectObj.hair == "thick black") {
		matches++;
	}

	if (suspectObj.eyes == "green") {
		matches++;
	}

	if (suspectObj.item == "green army coat") {
		matches++;
	}

	if (suspectObj.glasses == "very thin") {
		matches++;
	}

	if (suspectObj.item == "pink scarf") {
		matches++;
	}

	if (suspectObj.age > 32 && suspectObj.age < 48) {
		matches++;
	}

	return matches;
}

function findGuilty() {
	var matchingitems = 0;
	var mostmatchingitems = {};

	for (var i = 0; i < lineupLog.length; i++) {
		var topmatch = matchSuspect(lineupLog[i]);

		if (topmatch > matchingitems) {
			matchingitems = topmatch;
			mostmatchingitems = lineupLog[i];
		}
	}

	return mostmatchingitems;

}





function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	fill(255, 0, 0);
	text(findGuilty().name + " is guilty!", 60, 80);
}
