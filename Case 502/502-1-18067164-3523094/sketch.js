/*

Officer: 3523094
CaseNum: 502-1-18067164-3523094

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var archive_A = [
	{ detail_0: "clip", detail_1: "radiate", detail_2: "delicate" },
	{ detail_0: "sail", detail_1: "smile", detail_2: "meddle" },
	{ detail_0: "hurry", detail_1: "romantic", detail_2: "charge" },
	{ detail_0: "start", detail_1: "smile", detail_2: "succeed" },
	{ detail_0: "succeed", detail_1: "plug", detail_2: "play" },
	{ detail_0: "clip", detail_1: "sneeze", detail_2: "protect" },
	{ detail_0: "rejoice", detail_1: "capital", detail_2: "rejoice" },
	{ detail_0: "consider", detail_1: "play", detail_2: "consider" },
	{ detail_0: "hurry", detail_1: "radiate", detail_2: "Governor Zuckerberg" },
	{ detail_0: "fence", detail_1: "play", detail_2: "sneeze" }
];

var archive_B = [
	{ detail_0: "succeed", detail_1: "fence", detail_2: "sneeze" },
	{ detail_0: "a donation", detail_1: "succeed", detail_2: "succeed" },
	{ detail_0: "hurry", detail_1: "charge", detail_2: "smile" },
	{ detail_0: "stuff", detail_1: "mend", detail_2: "succeed" },
	{ detail_0: "bake", detail_1: "tug", detail_2: "succeed" },
	{ detail_0: "succeed", detail_1: "COBOL", detail_2: "Edsger" },
	{ detail_0: "Hopper’s", detail_1: "rejoice", detail_2: "start" },
	{ detail_0: "smile", detail_1: "syndicate", detail_2: "she has" },
	{ detail_0: "smile", detail_1: "rejoice", detail_2: "bake" },
	{ detail_0: "clip", detail_1: "tug", detail_2: "start" }
];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(1280, 800);

	// replace all redacted words with the correct values from the data structures above

	missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

	redactedText = "My dearest " + archive_B[5].detail_2 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + archive_B[6].detail_0 + " intervention. I suspect that " + archive_B[7].detail_2 + " a " + archive_A[2].detail_1 + " interest at the " + archive_B[5].detail_1 + ". I and the " + archive_B[7].detail_1 + " appreciate your many contributions over the years. However, this is a most " + archive_A[0].detail_2 + " matter which would require significant " + archive_A[6].detail_1 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + archive_B[1].detail_0 + " to my forthcoming campaign would help. Yours sincerely, " + archive_A[8].detail_2;

}

function draw() {
	// you don't need to change this
	image(backgroundImg, 0, 0);
	stroke(0);
	strokeWeight(3);
	line(width / 2, 10, width / 2, height - 10);
	noStroke();
	textFont(myFont);
	textSize(14);
	text(redactedText, 30, 100, 580, 600);
	text(missingWords, 670, 100, 580, 600);
}
