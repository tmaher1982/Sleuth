/*

Officer: 3523094
CaseNum: 701-3-27684570-3523094

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from summer joyer.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. It's hard to say. They were carrying a red backpack. They brobably weigh between 58 and 81 kg. Their expression seemed blank. They had dark brown hair. They were fairly tall, I think between a height of 150 and 195 cm. They wore red glasses. It was so scary! They were wearing a black overcoat. They seemed to be between the age of 34 and 48 years old. It's hard to say. That's all I know officer. 

*/

var usualSuspects = [
	{
		"name": "DEEDEE WILLMAR",
		"accessory": "laptop bag",
		"glasses": "light tan",
		"item": "fur vest",
		"coat": "green army coat",
		"weight": 76,
		"age": 54,
		"height": 175
	},
	{
		"name": "LAVERNE BROADVIEW",
		"accessory": "metal briefcase",
		"glasses": "black",
		"item": "pair of leather trousers",
		"coat": "black hoodie",
		"weight": 70,
		"age": 40,
		"height": 184
	},
	{
		"name": "HANG FORSLIN",
		"accessory": "red backpack",
		"glasses": "red",
		"item": "pink scarf",
		"coat": "black overcoat",
		"weight": 62,
		"age": 44,
		"height": 151
	},
	{
		"name": "SUMMER PHINNEY",
		"accessory": "black duffle bag",
		"glasses": "very thick",
		"item": "net weave shirt",
		"coat": "white fur coat",
		"weight": 86,
		"age": 37,
		"height": 181
	},
	{
		"name": "MAJORIE DORCEY",
		"accessory": "plastic box",
		"glasses": "cheap plastic",
		"item": "purple hat",
		"coat": "red parka",
		"weight": 78,
		"age": 43,
		"height": 195
	},
	{
		"name": "LINETTE SYMMES",
		"accessory": "glass bottle",
		"glasses": "blue",
		"item": "orange socks",
		"coat": "green jacket",
		"weight": 73,
		"age": 45,
		"height": 174
	},
	{
		"name": "PIERRE GOODBURY",
		"accessory": "orange tote bag",
		"glasses": "thin metallic",
		"item": "red necktie",
		"coat": "blue overcoat",
		"weight": 72,
		"age": 37,
		"height": 177
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

// Declare both your functions here
function matchSuspect(usualSuspects) {

	let matches = 0;
	if (usualSuspects.item == "pink scarf") matches++;

	if (usualSuspects.accessory == "red backpack") {
		matches++;
	}
	if (usualSuspects.weight > 58 && usualSuspects.weight < 81) {
		matches++;
	}
	if (usualSuspects.height > 150 && usualSuspects.height < 195) {
		matches++;
	}
	if (usualSuspects.glasses == "red") {
		matches++;
	}

	if (usualSuspects.coat == "black overcoat") {
		matches++;
	}
	if (usualSuspects.age > 34 && usualSuspects.age < 48) {
		matches++;
	}
	//console.log("Matches are " + matches);
	return matches;
}


// function traverseSuspects() {
// 	let name = " ";
// 	let max = 0;
// 	for (let i = 0; i < usualSuspects.length; i++) {
// 		if (matchSuspect(usualSuspects[i]) > max) {
// 			max = matchSuspect(usualSuspects[i]);

// 			name = usualSuspects[i].name;
// 		}

// 		//suspect = usualSuspects[max].name;
// 		//return suspect;
// 		//var name = usualSuspects[max].name;
// 		//name = suspect;
// 		return name;
// 		console.log("the name is " + name);
// 	}


// }

function traverseSuspects() {
	let name = " ";
	let rank = 0;
	let max = 0;
	for (let i = 0; i < usualSuspects.length; i++) {
		if (matchSuspect(usualSuspects[i]) > max) {
			max = matchSuspect(usualSuspects[i]);
			rank++;

		}


		//suspect = usualSuspects[max].name;
		//return suspect;
		//var name = usualSuspects[max].name;
		//name = suspect;
		//return name;

	}
	name = usualSuspects[rank - 1].name;
	//console.log("the name is " + name);
	return name;

}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	fill(255, 0, 0);
	text(traverseSuspects().name + " is guilty!", 60, 80);
}
