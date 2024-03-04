/*

Officer: 3523094
CaseNum: 202-3-15637403-3523094

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Hot Pink filled text with a Purple outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(644,511);
	textSize(31);
}

function draw()
{
	background(255);

	fill(255,127,80);
	stroke(255,215,0);
	textFont(RonsFont);
//	text("I", 575,165);
	push();
	fill(218,112,214);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("My", 17,31);
	pop();
	stroke(255,165,0);
	textFont(Melissa);
//	text("oney", 232,165);
	fill(0,139,139);
	stroke(255,69,0);
//	text("not", 549,202);
	fill(218,165,32);
	stroke(34,139,34);
	textFont(Diggity);
//	text("can", 398,165);
	push();
	fill(0,0,128);
	stroke(0,255,255);
//	text("secrets,", 441,236);
	pop();
	stroke(127,255,0);
	textFont(Ballpointprint);
//	text("nual", 365,202);
	fill(152,251,152);
	stroke(160,82,45);
	textFont(Melissa);
//	text("more", 175,236);
	push();
	fill(250,128,114);
	stroke(0,0,205);
	textFont(Ballpointprint);
//	text("out.", 344,128);
	pop();
	fill(30,144,255);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("Are", 7,93);
	fill(0,100,0);
	stroke(32,178,170);
	textFont(Diggity);
//	text("can", 15,202);
	push();
	fill(0,250,154);
	stroke(139,69,19);
	textFont(RonsFont);
//	text("I'm", 492,202);
	pop();
	stroke(0,128,128);
//	text("I", 224,236);
	fill(240,128,128);
	stroke(255,0,0);
	textFont(Melissa);
//	text("?", 357,236);
	fill(218,165,32);
	stroke(25,25,112);
	textFont(RonsFont);
//	text("all", 306,128);
	fill(144,238,144);
	stroke(139,0,139);
	textFont(Melissa);
//	text("of", 191,165);
	fill(220,20,60);
	stroke(0,255,255);
	textFont(Diggity);
//	text("delays.", 419,202);
	push();
	fill(173,216,230);
	stroke(255,0,255);
//	text("cash.", 515,165);
	pop();
	stroke(255,0,255);
	textFont(RonsFont);
//	text("sometimes.", 318,267);
	stroke(124,252,0);
	textFont(Ballpointprint);
//	text("so", 192,267);
	fill(107,142,35);
	stroke(218,165,32);
	textFont(RonsFont);
//	text("silence.", 14,267);
	fill(124,252,0);
	stroke(139,0,139);
	textFont(Ballpointprint);
//	text("The", 374,236);
	fill(128,0,128);
	stroke(25,25,112);
	textFont(RonsFont);
//	text("avoiding", 114,93);
	fill(64,224,208);
	stroke(128,0,0);
	textFont(Melissa);
//	text("Is", 393,128);
	fill(160,82,45);
	stroke(148,0,211);
//	text("Forever", 11,329);
//	text("m", 217,165);
	fill(238,232,170);
	stroke(255,69,0);
//	text("and", 161,128);
	push();
	fill(25,25,112);
	stroke(139,0,0);
	textFont(RonsFont);
//	text("If", 294,165);
	pop();
	stroke(128,0,128);
	textFont(Diggity);
//	text("sort", 197,128);
	fill(127,255,0);
	stroke(0,255,0);
//	text("so,", 335,165);
	fill(0,128,0);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("hould", 423,93);
	fill(240,128,128);
	stroke(0,139,139);
//	text("sure", 11,236);
	fill(255,69,0);
	stroke(0,206,209);
	textFont(Melissa);
//	text("?", 8,165);
	fill(176,224,230);
	stroke(128,0,128);
	textFont(Ballpointprint);
//	text("?", 252,93);
	fill(255,0,255);
	stroke(148,0,211);
	textFont(Diggity);
//	text("are", 145,267);
	push();
	fill(139,69,19);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("longer", 94,202);
	pop();
	stroke(50,205,50);
	textFont(RonsFont);
//	text("for", 11,128);
	fill(176,224,230);
	stroke(139,0,0);
	textFont(Melissa);
//	text("Bob,", 164,31);
	fill(255,0,255);
	stroke(153,50,204);
	textFont(Diggity);
//	text("no", 61,202);
	stroke(0,255,0);
//	text("yours,", 81,329);
	fill(218,165,32);
	stroke(255,215,0);
	textFont(Ballpointprint);
//	text("Are", 25,165);
	fill(153,50,204);
	stroke(139,0,0);
	textFont(RonsFont);
//	text("send", 444,165);
	push();
	fill(30,144,255);
	stroke(0,128,128);
	textFont(Diggity);
//	text("ed", 282,267);
	pop();
	fill(139,0,0);
	textFont(Ballpointprint);
//	text("these", 241,202);
	fill(144,238,144);
	stroke(107,142,35);
	textFont(RonsFont);
//	text("a", 66,128);
	stroke(139,0,0);
//	text("go", 502,93);
	fill(165,42,42);
	stroke(50,205,50);
	textFont(Melissa);
//	text("away", 538,93);
	fill(0,191,255);
	stroke(0,250,154);
	textFont(Diggity);
//	text("relationship", 452,128);
	fill(240,128,128);
	stroke(34,139,34);
	textFont(RonsFont);
//	text("short", 117,165);
	fill(220,20,60);
	stroke(0,0,139);
	textFont(Melissa);
//	text("?", 277,165);
	fill(0,139,139);
	stroke(0,128,0);
	textFont(Ballpointprint);
//	text("conti", 320,202);
	fill(100,149,237);
	stroke(218,165,32);
	textFont(Melissa);
//	text("our", 420,128);
	stroke(165,42,42);
	textFont(RonsFont);
//	text("we", 363,93);
	fill(255,105,180);
	stroke(128,0,128);
	textFont(Melissa);
//	text("much", 126,236);
	fill(218,112,214);
	stroke(107,142,35);
	textFont(Ballpointprint);
//	text("this", 252,128);
	push();
	fill(75,0,130);
	stroke(199,21,133);
	textFont(Melissa);
//	text("how", 85,236);
	pop();
	stroke(75,0,130);
	textFont(RonsFont);
//	text("I", 371,165);
	fill(219,112,147);
	stroke(127,255,0);
	textFont(Melissa);
//	text("Perhaps", 286,93);
	fill(244,164,96);
	stroke(165,42,42);
	textFont(RonsFont);
//	text("take", 288,236);
	push();
	fill(255,215,0);
	stroke(46,139,87);
	textFont(Diggity);
//	text("x", 67,391);
	pop();
	fill(233,150,122);
	stroke(255,140,0);
	textFont(Ballpointprint);
//	text("can", 239,236);
	fill(0,0,128);
	stroke(124,252,0);
	textFont(RonsFont);
//	text("darling", 66,31);
	fill(123,104,238);
	stroke(220,20,60);
	textFont(Ballpointprint);
//	text("you", 65,93);
	fill(255,105,180);
	stroke(128,0,128);
	textFont(Diggity);
	text("break", 91,128);
	text("ignore", 174,202);
	fill(100,149,237);
	stroke(0,128,0);
	textFont(Melissa);
//	text("you", 83,165);
	fill(65,105,225);
	stroke(0,100,0);
	textFont(RonsFont);
//	text("s", 410,93);
	fill(160,82,45);
	stroke(0,255,255);
	textFont(Melissa);
//	text("me", 221,93);
	fill(255,105,180);
	stroke(128,0,128);
	textFont(Diggity);
	text("guard", 227,267);
	text("safe", 570,128);
	fill(154,205,50);
	stroke(199,21,133);
	textFont(Melissa);
//	text("You", 108,267);
	fill(255,105,180);
	stroke(128,0,128);
	textFont(Diggity);
	text("the", 532,236);
	fill(250,128,114);
	stroke(0,0,205);
	textFont(Melissa);
//	text("Daisy", 13,391);



}
