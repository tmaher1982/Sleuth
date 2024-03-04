/*

Officer: 3523094
CaseNum: 701-0-81667800-3523094

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist darby goodbury and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. I'm not quite sure. They had short black hair. They were carrying a orange plasic bag. They wore white glasses. I'm not quite sure. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{
		"name": "BRIDGET MONKSFORD",
		"accessory": "plastic box",
		"hair": "white",
		"glasses": "cheap plastic"
	},
	{
		"name": "LOUISE THAXTER",
		"accessory": "glass bottle",
		"hair": "long white",
		"glasses": "black"
	},
	{
		"name": "KITTY FORSLIN", // This one
		"accessory": "orange plasic bag",
		"hair": "short black",
		"glasses": "white"
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
function matchProperties(suspectObj) {
	//It should only return "true" if the suspect matches the description in full.

	if (suspectObj.hair == "short black"
		&& suspectObj.accessory == "orange plasic bag"
		&& suspectObj.glasses == "white") {
		return true;
	}

	return false;

}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < suspectsArray.length; i++) {
		if (matchProperties(suspectsArray[i]) == true) {
			fill(255, 0, 0);
			text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
		} else {
			fill(0, 155, 0);
			text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20);
		}
	}
}
