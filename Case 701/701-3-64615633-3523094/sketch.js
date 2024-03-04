/*

Officer: 3523094
CaseNum: 701-3-64615633-3523094

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from lakesha mohwawk.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It was very dark and I could barely see, I distinctly remember that they were wearing a (purple hat)/ item, I remember thinking that was quite unusual. They were wearing a (red parka)/coat. They were fairly tall, I think between a (height of 170 and 210 cm). They brobably (weigh between 70 and 85 kg). They had (no hair)/hair. They seemed to be between the (age of 18 and 54 years old). I'll never forget their green eyes. The person I saw was (male)/gender. It was very dark and I could barely see, It's hard to say. I remember they had a anchor tattoo. That's all I can remember about them. 

*/
//var name = '';

var suspectsArray = [
	{
		"name": "MAJORIE PEGORD",
		"gender": "female",
		"item": "net weave shirt",
		"hair": "short black",
		"coat": "yellow poncho",
		"age": 23,
		"weight": 81,
		"height": 171
	},
	{
		"name": "LOUISE WILLMAR",
		"gender": "male",
		"item": "fur vest",
		"hair": "dark brown",
		"coat": "blue overcoat",
		"age": 48,
		"weight": 70,
		"height": 156
	},
	{
		"name": "LINETTE PORTOS",
		"gender": "male",
		"item": "purple hat",
		"hair": "no",
		"coat": "red parka",
		"age": 30,
		"weight": 75,
		"height": 176
	},
	{
		"name": "LAKESHA THAXTER",
		"gender": "female",
		"item": "orange socks",
		"hair": "white",
		"coat": "green army coat",
		"age": 40,
		"weight": 71,
		"height": 175
	},
	{
		"name": "LARRAINE MONKSFORD",
		"gender": "female",
		"item": "red necktie",
		"hair": "thick black",
		"coat": "black hoodie",
		"age": 36,
		"weight": 63,
		"height": 175
	},
	{
		"name": "PIERRE ASHELY",
		"gender": "female",
		"item": "pink scarf",
		"hair": "thin blond",
		"coat": "white fur coat",
		"age": 43,
		"weight": 72,
		"height": 157
	},
	{
		"name": "NICOLE SILVEIRA",
		"gender": "male",
		"item": "pair of leather trousers",
		"hair": "ginger",
		"coat": "black overcoat",
		"age": 29,
		"weight": 70,
		"height": 178
	}
];

var myFont;
var backgroundImg;
var name = "";

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(640, 480);
	textFont(myFont);
}

// Declare both your functions here
function matchProperties(suspectObj) {
	let matches = 0;
	if (suspectObj.item == "purple hat") {
		matches++;
	}

	if (suspectObj.coat == "red parka") {
		matches++;
	}

	if (suspectObj.height > 170
		&& suspectObj.height < 210) {
		matches++;
	}

	if (suspectObj.weight > 70
		&& suspectObj.weight < 85) {
		matches++;
	}

	if (suspectObj.hair == "no") {
		matches++;
	}

	if (suspectObj.age > 18
		&& suspectObj.age < 54) {
		matches++;
	}

	if (suspectObj.gender == "male") {
		matches++;
	}

	return matches;


}

// var guilty = {
// 	"name": ""
// }
var name;

function findGuilty() {
	// {
	// 	name: " "
	// }
	//this.name = " ";
	let rank = 0;
	let max = 0;
	//var name = ''
	for (i = 0; i < suspectsArray.length; i++) {
		if (matchProperties(suspectsArray[i]) > max) {
			max = matchProperties(suspectsArray[i]);
			rank = i;
		}
	}

	// this.name = suspectsArray[rank].name;
	// return name;



	//var guilty = suspectsArray[rank].name;
	// return
	// {
	// 	name: suspectsArray[rank].name;
	// }
	return suspectsArray[rank].name;


}

function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	fill(255, 0, 0);
	//text(findGuilty().name + " is guilty!", 60, 80);
	text(findGuilty() + " is guilty!", 60, 80);
}
