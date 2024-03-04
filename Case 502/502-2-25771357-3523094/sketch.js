/*

Officer: 3523094
CaseNum: 502-2-25771357-3523094

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var record_A = {
	fragment_0: ["hit", "charge", "sneeze"],
	fragment_1: ["hurry", "succeed", "mend"],
	fragment_2: ["stuff", "rejoice", "tug"],
	fragment_3: ["protect", "sail", "a donation"],
	fragment_4: ["fence", "protect", "fence"],
	fragment_5: ["succeed", "sail", "bake"],
	fragment_6: ["plug", "smile", "radiate"],
	fragment_7: ["meddle", "start", "fence"],
	fragment_8: ["play", "Hopper", "tug"],
	fragment_9: ["syndicate", "clip", "succeed"]
};

var record_B = {
	fragment_0: ["rejoice", "stuff", "Edsger"],
	fragment_1: ["consider", "start", "consider"],
	fragment_2: ["rejoice", "smile", "stuff"],
	fragment_3: ["mend", "clip", "charge"],
	fragment_4: ["stuff", "radiate", "protect"],
	fragment_5: ["ALGOL", "meddle", "smile"],
	fragment_6: ["campaign", "smile", "sail"],
	fragment_7: ["$200,000", "consider", "charge"],
	fragment_8: ["Governor Zuckerberg", "mend", "stuff"],
	fragment_9: ["sneeze", "fence", "clip"]
};

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(1280, 800);

	// replace all redacted words with the correct values from the data structures above

	missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

	redactedText = "Dear " + record_B.fragment_8[0] + ", I am sure that something could be worked out in terms of " + record_A.fragment_3[2] + " for your " + record_B.fragment_6[0] + ". How does " + record_B.fragment_7[0] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + record_A.fragment_8[1] + " needs to be out of the picture. She’s caused enough trouble. Get the " + record_A.fragment_9[0] + " to organise the " + record_A.fragment_0[0] + " but I’d prefer it you don’t mention me or " + record_B.fragment_5[0] + ". I owe them enough favours already. Your old friend, " + record_B.fragment_0[2];

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
