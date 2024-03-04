/*

Officer: 3523094
CaseNum: 701-1-21735546-3523094

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. I think they were more than 153 cm tall. I remember they had a neck tattoo. It's hard to say. They were carrying a red backpack. They were quite big, they probably weigh more than 58 Kg. Their expression seemed depressed. It's so hard to remember right now. Can I go home now Sir? 

*/

var lineupLog = [
	{
		"name": "KITTY SILVEIRA",
		"accessory": "laptop bag",
		"item": "dotted necktie",
		"expression": "blank",
		"weight": 73,
		"height": 185
	},
	{
		"name": "BRAD ASHELY",
		"accessory": "big black envelope",
		"item": "purple hat",
		"expression": "sad",
		"weight": 70,
		"height": 171
	},
	{
		"name": "LAVERNE NIEMELA",
		"accessory": "black duffle bag",
		"item": "pink scarf",
		"expression": "nerveous",
		"weight": 71,
		"height": 165
	},
	{
		"name": "DRUSILLA MOHWAWK",
		"accessory": "red backpack",
		"item": "orange socks",
		"expression": "depressed",
		"weight": 62,
		"height": 155
	},
	{
		"name": "TU JENI",
		"accessory": "plastic box",
		"item": "net weave shirt",
		"expression": "menacing",
		"weight": 92,
		"height": 205
	}
];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(640, 480);
	textFont(myFont);
}

// Declare your function here
function matchSuspect(lineupLog) {
	if (lineupLog.item == "orange socks"
		&& lineupLog.height > 153
		&& lineupLog.accessory == "red backpack"
		&& lineupLog.weight > 58
		&& lineupLog.expression == "depressed") {
		return true;
	}
	return false;
}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < lineupLog.length; i++) {
		if (matchSuspect(lineupLog[i]) == true) {
			fill(255, 0, 0);
			text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
		} else {
			fill(0, 155, 0);
			text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20);
		}
	}
}
