/*

Officer: 3523094
CaseNum: 101-2-90907715-3523094

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a Goldenrod filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Dark Salmon filled
rectangle around him.

Identify the man in the striped top by drawing a Coral filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    
    //Goldenrod rectangle around Lina
    fill(218, 165,32, 100);
    //considering no shoe
    rect(500, 175, 200, 315);
    // Considering a shoe
    //rect(500, 175, 200, 490);
    
    // Dark salmon filled rectangle around the heavy man 
    fill(233, 150, 122, 100);
    rect(455, 220, 403, 438);

    // Coral filled rectangle around the man with stripped top
    fill(255, 127, 80, 100);
    rect(655, 30, 55, 154);

}
