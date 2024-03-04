/*

Officer: 3523094
CaseNum: 202-0-43116974-3523094

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Dark Cyan text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(643,701);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(186,85,211);
//	text("x", 82,590);
	fill(124,252,0);
//	text("luckiest", 126,283);
	fill(127,255,0);
//	text("were", 302,203);
	fill(72,209,204);
//	text("quiet", 11,425);
	fill(218,112,214);
//	text("It", 110,390);
	fill(75,0,130);
//	text("alo", 354,390);
	fill(154,205,50);
//	text("you", 233,203);
	fill(153,50,204);
//	text("the", 12,128);
	fill(0,255,255);
//	text("seconds", 15,203);
	fill(0,0,205);
//	text("lo", 12,168);
	fill(178,34,34);
//	text("the", 289,462);
//	text("can", 10,355);
//	text("g,", 461,355);
	fill(0,100,0);
//	text("From", 495,96);
	fill(240,230,140);
//	text("and", 96,526);
	fill(222,184,135);
//	text("You", 10,96);
	fill(107,142,35);
//	text("your", 12,316);
	fill(0,139,139);
	text("first", 75,128);
	text("a", 283,243);
	text("date", 527,316);
	fill(75,0,130);
//	text("knew", 226,168);
//	text("the", 63,283);
	fill(0,206,209);
//	text("face,", 118,168);
	fill(255,99,71);
//	text("confession", 313,243);
//	text("darlin", 370,355);
//	text("your", 461,128);
	fill(0,255,0);
//	text("of", 248,462);
	fill(106,90,205);
//	text("ali", 381,283);
	fill(218,165,32);
//	text("I", 610,316);
	fill(165,42,42);
//	text("eyes.", 14,390);
	fill(138,43,226);
//	text("when", 178,390);
	fill(0,250,154);
//	text("few", 505,168);
	fill(176,224,230);
//	text("that", 468,283);
//	text("saw", 388,128);
//	text("in", 373,96);
	fill(0,128,0);
//	text("your", 281,425);
	fill(240,128,128);
//	text("be", 13,283);
//	text("Daisy,", 179,32);
	fill(50,205,50);
//	text("May", 98,243);
	fill(218,112,214);
//	text("our", 395,316);
	fill(0,139,139);
	text("April", 412,96);
	text("chosen", 94,316);
	fill(139,0,139);
//	text("voice", 363,425);
	fill(0,0,255);
//	text("must", 541,243);
	fill(199,21,133);
//	text("hear", 198,425);
//	text("my", 390,203);
	fill(0,0,205);
//	text("am", 293,390);
//	text("true", 520,203);
	fill(147,112,219);
//	text("I", 207,168);
	fill(0,0,205);
//	text("I", 175,243);
	fill(0,255,127);
//	text("person", 261,283);
	fill(144,238,144);
//	text("I", 544,283);
//	text("make", 194,243);
	fill(127,255,212);
//	text("si", 301,316);
//	text("I", 369,128);
	fill(72,209,204);
//	text("Oh", 18,32);
	fill(0,255,255);
//	text("like", 459,425);
	fill(205,133,63);
//	text("love.", 10,243);
	fill(139,69,19);
//	text("last", 458,316);
	fill(240,230,140);
//	text("sunny", 198,96);
	fill(220,20,60);
//	text("kisses,", 166,526);
	fill(218,112,214);
//	text("one", 450,203);
	fill(0,0,205);
//	text("har", 352,462);
	fill(0,206,209);
//	text("the", 525,425);
	fill(255,127,80);
//	text("in", 453,390);
//	text("green", 501,355);
	fill(255,215,0);
//	text("am", 563,283);
	fill(210,105,30);
//	text("your", 288,355);
	fill(127,255,0);
//	text("only", 78,355);
	fill(148,0,211);
//	text("ve", 419,283);
	fill(0,128,128);
//	text("moment", 148,128);
	fill(152,251,152);
//	text("that", 103,425);
	fill(64,224,208);
//	text("hink", 169,355);
	fill(152,251,152);
//	text("the", 492,390);
//	text("of", 247,355);
	fill(255,165,0);
//	text("are", 76,96);
	fill(0,255,255);
//	text("my", 138,96);
//	text("lovely", 73,32);
	fill(255,69,0);
//	text("music", 143,462);
//	text("I", 522,243);
	fill(184,134,11);
//	text("Bob", 10,590);
	fill(173,216,230);
//	text("Love", 10,526);
//	text("Ever", 219,316);
	fill(255,140,0);
//	text("is", 142,390);
//	text("day", 304,96);
	fill(50,205,50);
//	text("I", 274,390);
	fill(255,105,180);
//	text("vely", 41,168);
	fill(0,0,128);
//	text("p.", 405,462);
	fill(255,140,0);
//	text("ne", 403,390);
	fill(152,251,152);
//	text("that", 157,203);
//	text("blessed", 10,462);
	fill(184,134,11);
//	text("those", 405,168);
	fill(65,105,225);
//	text("t", 156,355);
	fill(173,255,47);
//	text("from", 321,168);
	fill(65,105,225);
//	text("nce", 327,316);
//	text("that", 293,128);
//	text("I", 179,425);
	fill(210,105,30);
//	text("?", 495,243);



}
