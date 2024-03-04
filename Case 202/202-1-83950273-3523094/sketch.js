/*

Officer: 3523094
CaseNum: 202-1-83950273-3523094

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Blue Violet filled text with a Navy outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(617,452);
	textFont(letterFont);
	textSize(25);
}

function draw()
{
	background(255);

fill(0,255,0);
	stroke(154,205,50);
//	text("night", 521,131);
fill(255,215,0);
	stroke(255,0,0);
//	text("to", 483,245);
fill(165,42,42);
	stroke(255,165,0);
//	text("small", 368,216);
fill(0,128,128);
	stroke(127,255,0);
//	text("desolate.", 11,245);
fill(50,205,50);
	stroke(0,206,209);
//	text("the", 374,189);
fill(128,128,0);
	stroke(127,255,0);
//	text("side,", 247,216);
fill(128,0,0);
	stroke(0,128,0);
//	text("have", 414,245);
fill(255,215,0);
	stroke(218,165,32);
//	text("it", 216,106);
fill(205,133,63);
//	text("k", 410,106);
fill(255,0,255);
	stroke(255,255,0);
//	text("?", 163,271);
fill(0,128,0);
//	text("my", 189,131);
fill(0,128,128);
	stroke(32,178,170);
//	text("Even", 273,189);
fill(184,134,11);
	stroke(124,252,0);
//	text("my", 200,216);
fill(0,100,0);
	stroke(184,134,11);
//	text("only", 262,163);
fill(144,238,144);
	stroke(255,69,0);
//	text("to", 9,131);
fill(255,105,180);
	stroke(255,215,0);
//	text("be", 356,271);
fill(128,0,0);
	stroke(199,21,133);
//	text("this", 314,216);
fill(152,251,152);
	stroke(50,205,50);
//	text("again", 483,271);
fill(34,139,34);
	stroke(0,100,0);
//	text("Bob,", 146,25);
fill(255,140,0);
	stroke(128,0,128);
//	text("x", 85,371);
fill(222,184,135);
	stroke(255,215,0);
//	text("long", 532,106);
fill(0,250,154);
	stroke(184,134,11);
//	text("spring,", 423,189);
fill(128,128,0);
	stroke(139,0,0);
//	text("yours,", 108,321);
fill(100,149,237);
	stroke(46,139,87);
//	text("we", 314,106);
fill(0,255,0);
	stroke(0,255,0);
//	text("this", 8,271);
fill(0,255,255);
	stroke(0,250,154);
//	text("?", 496,106);
fill(255,105,180);
	stroke(0,255,255);
//	text("miss", 85,75);
fill(238,130,238);
	stroke(218,165,32);
//	text("I'm", 417,163);
fill(0,0,128);
	stroke(153,50,204);
//	text("you", 243,75);
fill(220,20,60);
	stroke(0,0,255);
//	text("feels", 511,216);
fill(25,25,112);
	stroke(0,255,255);
//	text("will", 264,271);
fill(186,85,211);
	stroke(199,21,133);
//	text("you.", 355,163);
fill(173,216,230);
	stroke(46,139,87);
//	text("do", 360,245);
fill(0,255,127);
	stroke(0,128,128);
//	text("on", 11,189);
fill(106,90,205);
	stroke(34,139,34);
//	text("since", 241,106);
fill(219,112,147);
	stroke(0,0,255);
//	text("Daisy", 8,371);
fill(50,205,50);
	stroke(0,0,128);
//	text("I", 123,163);
fill(139,0,139);
	stroke(220,20,60);
//	text("t", 191,163);
fill(65,105,225);
	stroke(148,0,211);
//	text("hold", 42,131);
fill(255,99,71);
	stroke(46,139,87);
//	text("return.", 181,189);
fill(238,232,170);
	stroke(154,205,50);
//	text("up", 399,131);
fill(65,105,225);
	stroke(218,165,32);
//	text("darling", 51,25);
fill(220,20,60);
	stroke(25,25,112);
//	text("arms.", 236,131);
fill(0,191,255);
	stroke(50,205,50);
//	text("at", 167,216);
fill(255,0,0);
	stroke(128,0,0);
//	text("My", 6,25);
	fill(138,43,226);
	stroke(0,0,128);
	text("place", 441,75);
	text("store", 516,245);
fill(255,255,0);
	stroke(139,69,19);
//	text("How", 516,75);
fill(238,232,170);
	stroke(128,0,0);
//	text("banking", 463,163);
fill(127,255,212);
	stroke(210,105,30);
//	text("aving", 166,75);
fill(0,250,154);
	stroke(0,128,128);
//	text("in", 343,189);
fill(184,134,11);
	stroke(127,255,0);
//	text("stare", 329,131);
fill(154,205,50);
	stroke(107,142,35);
//	text("many", 8,106);
fill(106,90,205);
	stroke(255,140,0);
//	text("months", 86,106);
fill(0,250,154);
	stroke(255,69,0);
//	text("issed", 424,106);
fill(0,100,0);
	stroke(0,128,0);
//	text("and", 68,163);
fill(240,230,140);
	stroke(0,255,255);
//	text("your", 50,189);
fill(64,224,208);
	stroke(255,215,0);
//	text("longing", 62,271);
fill(160,82,45);
	stroke(255,69,0);
//	text("can", 138,163);
fill(255,215,0);
	stroke(0,0,205);
//	text("I", 70,75);
fill(148,0,211);
	stroke(153,50,204);
//	text("the", 472,131);
fill(222,184,135);
	stroke(220,20,60);
//	text("w", 11,216);
fill(218,165,32);
//	text("in", 158,131);
//	text("much", 195,245);
fill(240,230,140);
	stroke(255,215,0);
//	text("I", 517,106);
fill(184,134,11);
	stroke(255,165,0);
//	text("united", 395,271);
fill(65,105,225);
	stroke(160,82,45);
//	text("you", 104,131);
fill(0,255,255);
	stroke(139,69,19);
//	text("I", 399,245);
	fill(138,43,226);
	stroke(0,0,128);
	text("at", 439,131);
	text("swift", 114,189);
fill(219,112,147);
	stroke(0,255,255);
//	text("last", 357,106);
fill(144,238,144);
	stroke(139,0,139);
//	text("How", 133,245);
fill(0,191,255);
	stroke(255,0,255);
//	text("you", 113,216);
fill(255,105,180);
	stroke(25,25,112);
//	text("of", 323,163);
fill(135,206,235);
	stroke(0,0,205);
//	text("we", 313,271);
fill(160,82,45);
	stroke(255,255,0);
//	text("er", 327,245);
fill(250,128,114);
	stroke(139,0,0);
//	text("How", 8,75);
fill(233,150,122);
	stroke(255,215,0);
//	text("?", 560,271);
fill(238,232,170);
	stroke(107,142,35);
//	text("I", 314,131);
fill(219,112,147);
	stroke(128,0,0);
//	text("When", 184,271);
fill(152,251,152);
	stroke(107,142,35);
//	text("around", 297,75);
fill(148,0,211);
	stroke(255,69,0);
//	text("hink", 201,163);
	fill(138,43,226);
	stroke(0,0,128);
	text("town", 442,216);
	text("is", 188,106);
	text("the", 392,75);
fill(178,34,34);
	stroke(75,0,130);
//	text("ithout", 31,216);
fill(128,0,128);
	stroke(0,255,127);
//	text("ver", 60,321);
fill(0,0,128);
	stroke(0,0,128);
//	text("h", 150,75);
fill(160,82,45);
	stroke(184,134,11);
//	text("sky,", 11,163);
fill(0,0,139);
	stroke(46,139,87);
//	text("Fore", 8,321);
fill(165,42,42);
	stroke(0,206,209);
//	text("long", 273,245);



}
