/*

Officer: 3523094
CaseNum: 101-3-37156920-3523094

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Yellow Green filled rectangle with a Maroon outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Lime filled
rectangle with a Deep Sky Blue outline around him.

Identify the man reading the newspaper by drawing a Orange filled rectangle
with a Medium Turquoise outline around him.

Identify the woman with the dog by drawing a Dark Orange filled rectangle with a
Indigo outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    
    // Lina with Yellow Green filled rectangle with a Maroon outline.
    fill(154, 205, 50, 100);
    stroke(128,0,0);
    rect(995, 117, 220, 445 );
    
    
    // man with the monocle smoking the cigar with a Lime filled rectangle with a Deep Sky Blue outline around him.
    fill(0, 255, 0, 100);
    stroke(0,191,255);
    rect(45, 242, 190, 245 );
    
    
    // man reading the newspaper by drawing a Orange filled rectangle with a Medium Turquoise outline around him.
    fill(255, 165, 0, 100);
    stroke(72,209,204);
    rect(1492, 160, 180, 340 );
    
    //Identify the woman with the dog by drawing a Dark Orange filled rectangle with a Indigo outline around her
    fill(255, 140, 0, 100);
    stroke(75,0,130);
    rect(585, 95, 250, 540 );
    

}
