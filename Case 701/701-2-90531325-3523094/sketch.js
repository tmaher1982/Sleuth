/*

Officer: 3523094
CaseNum: 701-2-90531325-3523094

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from nicole deauville. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They seemed to be between the age of 36 and 48 years old. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. They were fairly tall, I think between a height of 149 and 192 cm. It's so hard to remember right now. It was very dark and I could barely see, The person I saw was male. They had red hair. They brobably weigh between 68 and 74 kg. They were wearing a yellow poncho. I remember they had a dark black tattoo. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{
		"name": "JULIANA MONKSFORD",
		"coat": "black hoodie",
		"gender": "male",
		"hair": "long white",
		"item": "orange socks",
		"age": 37,
		"height": 168,
		"weight": 77
	},
	{
		"name": "KITTY JOYER",
		"coat": "white fur coat",
		"gender": "male",
		"hair": "dark brown",
		"item": "purple hat",
		"age": 29,
		"height": 171,
		"weight": 87
	},
	{
		"name": "JESSIA DURANTS",
		"coat": "red parka",
		"gender": "female",
		"hair": "ginger",
		"item": "pink scarf",
		"age": 48,
		"height": 165,
		"weight": 74
	},
	{
		"name": "HANG FORSLIN",
		"coat": "green jacket",
		"gender": "male",
		"hair": "short black",
		"item": "fur vest",
		"age": 49,
		"height": 183,
		"weight": 72
	},
	{
		"name": "DEEDEE SYMMES",
		"coat": "black overcoat",
		"gender": "female",
		"hair": "shaved",
		"item": "pair of leather trousers",
		"age": 47,
		"height": 160,
		"weight": 77
	},
	{
		"name": "LAKESHA PEGORD",
		"coat": "blue overcoat",
		"gender": "female",
		"hair": "thin blond",
		"item": "red necktie",
		"age": 48,
		"height": 152,
		"weight": 75
	},
	{
		"name": "JACQUELINE DAVISWOOD",
		"coat": "yellow poncho",
		"gender": "male",
		"hair": "red",
		"item": "net weave shirt",
		"age": 47,
		"height": 185,
		"weight": 71
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
function checkSuspect(suspectsArray) {
	if (
		suspectsArray.age > 36
		&& suspectsArray.age < 48
		&& suspectsArray.item == "net weave shirt"
		&& suspectsArray.height > 149
		&& suspectsArray.height < 192
		&& suspectsArray.gender == "male"
		&& suspectsArray.hair == "red"
		&& suspectsArray.weight > 68
		&& suspectsArray.weight < 74
		&& suspectsArray.coat == "yellow poncho"

	) {
		return 7;
	}
	return false;
}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < suspectsArray.length; i++) {
		let matchingProperties = checkSuspect(suspectsArray[i]);
		fill(50 * matchingProperties, 250 - (50 * matchingProperties), 0);
		text("found " + matchingProperties + " matching properties for " + suspectsArray[i].name, 60, 60 + i * 20);
	}
}
