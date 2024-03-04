/*

Officer: 3523094
CaseNum: 403-1-33335340-3523094

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Turing's Column.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 70 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 70 pixels of Turing's Column - draw a DarkViolet ellipse with a radius of 70 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    fill(148,0,211);
    //if (int(dist(mouseX, mouseY, 1416, 689)) <= 70)
    if (dist(mouseX, mouseY, 1416, 689) <= 70)
        {
           ellipse(1416, 689, 140, 140);
            //ellipse(mouseX, mouseY, 70, 70);
            
        }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
