/*

Officer: 3523094
CaseNum: 101-2-85320491-3523094

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a Sandy Brown filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Dark Salmon filled
rectangle around him.

Identify the man in the striped top by drawing a Dark Turquoise filled rectangle around
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
    
    //Sandybrown rectangle around Lina
    fill(244, 164,96, 100);
    rect(1264, 20, 103, 200);
    
    // Drak salmon for heavy man 
    fill(233, 150, 122, 100);
    //rect(655, 30, 55, 154);
    rect(850, 329, 480, 500);
    
    // Dark turquoise filled rectangle around the  man with stripped top
    fill(0, 206, 209, 100);
    rect(1545, 70, 90, 230);

    
    
}
