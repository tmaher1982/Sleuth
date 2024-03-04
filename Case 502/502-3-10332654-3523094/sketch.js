/*

Officer: 3523094
CaseNum: 502-3-10332654-3523094

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ACensored = [
	{
		bit0: ["fence", "consider", "ALGOL fish wholesalers", "Governor Zuckerberg"],
		bit1: ["charge", "sail", "tug", "syndicate"],
		bit2: ["hurry", "plug", "tug", "fence"]
	},
	{
		bit0: ["play", "donation", "smile", "ALGOL"],
		bit1: ["fence", "hurry", "radiate", "fence"],
		bit2: ["stuff", "stuff", "play", "succeed"]
	},
	{
		bit0: ["start", "succeed", "stuff", "consider"],
		bit1: ["sneeze", "charge", "fence", "consider"],
		bit2: ["meddle", "mend", "rejoice", "smile"]
	},
	{
		bit0: ["play", "bake", "meddle", "hurry"],
		bit1: ["charge", "plug", "bake", "smile"],
		bit2: ["play", "plug", "consider", "hurry"]
	},
	{
		bit0: ["consider", "meddle", "protect", "succeed"],
		bit1: ["charge", "protect", "rejoice", "stuff"],
		bit2: ["start", "hurry", "fence", "bake"]
	}];

var BCensored = [
	{
		bit0: ["rejoice", "succeed", "mend", "mend"],
		bit1: ["radiate", "radiate", "succeed", "bake"],
		bit2: ["radiate", "meddle", "succeed", "clip"]
	},
	{
		bit0: ["fence", "$200,000", "protect", "rejoice"],
		bit1: ["start", "rejoice", "bake", "consider"],
		bit2: ["smile", "consider", "play", "sail"]
	},
	{
		bit0: ["Edsger", "sail", "protect", "COBOL"],
		bit1: ["bake", "hurry", "play", "charge"],
		bit2: ["development", "bake", "stuff", "tug"]
	},
	{
		bit0: ["you", "smile", "sneeze", "play"],
		bit1: ["radiate", "play", "plug", "tug"],
		bit2: ["mend", "sail", "play", "fence"]
	},
	{
		bit0: ["protect", "charge", "stuff", "start"],
		bit1: ["tug", "plug", "fence", "stuff"],
		bit2: ["consider", "tug", "sneeze", "fence"]
	}];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(1280, 800);

	// replace all redacted words with the correct values from the data structures above

	missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

	redactedText = "My dearest " + BCensored[2].bit0[0] + ", I have just received your very generous " + ACensored[1].bit0[1] + " of " + BCensored[1].bit0[1] + ". Thank you. This will be invaluable to our campaign. " + ACensored[1].bit0[3] + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + BCensored[3].bit0[0] + " or " + ACensored[0].bit0[2] + " to the " + ACensored[0].bit1[3] + ". Your new " + BCensored[2].bit2[0] + " at the " + BCensored[2].bit0[3] + " can now proceed without impediment. Yours sincerely, " + ACensored[0].bit0[3];

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
