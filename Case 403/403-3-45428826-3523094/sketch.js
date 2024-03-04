/*

Officer: 3523094
CaseNum: 403-3-45428826-3523094

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Meyers Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 63 meters from Norbert's Cupcake Center then alert local police by drawing a GreenYellow circle around it with a radius of 63 pixels.
- if Shiffman is in Aaron Swartz Memorial Park then the neighbourhood watch must be notified by drawing a MediumTurquoise rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DarkMagenta rectangle covering the area between Gates Avenue, Ada Avenue, Meyers Way and Romero Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;
var norbertX = 2459;
var norbertY = 622;
var aaronSwartzX1 = 2009;
var aaronSwartzX2 = 2357;
var aaronSwartzY1 = 583;
var aaronSwartzY2 = 760;
var coverX1 = 772;
var coverX2 = 1171;
var coverY1 = 255;
var coverY2 = 835;

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
//    - if Shiffman is within 63 meters from Norbert's Cupcake Center then alert local police by drawing a GreenYellow circle around it with a radius of 63 pixels.
    if (dist(mouseX, mouseY, norbertX, norbertY) <= 63)
        {
            fill(173, 255, 47);
            ellipse(norbertX, norbertY, 63 *2, 63 * 2)
        }
    
//- if Shiffman is in Aaron Swartz Memorial Park then the neighbourhood watch must be notified by drawing a MediumTurquoise rectangle around it.
    
    else if (mouseX >= aaronSwartzX1 && mouseX <= aaronSwartzX2 && mouseY >= aaronSwartzY1 && mouseY <=aaronSwartzY2)
        {
            fill(72, 209, 204);
            rect(aaronSwartzX1, aaronSwartzY1, aaronSwartzX2 - aaronSwartzX1, aaronSwartzY2 - aaronSwartzY1)
        }
//- if Shiffman is in neither position, a global alert must be issued by drawing a DarkMagenta rectangle covering the area between Gates Avenue, Ada Avenue, Meyers Way and Romero Avenue.
    else
        // if ((dist(mouseX, mouseY, norbertX, norbertY) > 63) OR ((mouseX < aaronSwartzX1 && mouseX > aaronSwartzX2 && mouseY < aaronSwartzY1 && aaronSwartzY2))) 
    {
        fill(139,0,139);
        rect(coverX1, coverY1, coverX2 - coverX1 , coverY2 - coverY1);
    }
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
