/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3523094
CaseNum: 201-3-33605777-3523094

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(220, 286);
    vertex(223, 335);
    vertex(310, 300);
    vertex(370, 260);
    
    vertex(500, 500);
    vertex(510, 460);
    
    vertex(520, 525);
    vertex(605, 448);
    
    //vertex(620, 450);
    vertex(485, 225);
    vertex(525, 205);
    vertex(525, 115);
    vertex(491, 115);
    vertex(495, 177);
    vertex(405, 145);
    vertex(355, 165);
    vertex(350, 205);
    
    vertex(305, 255);
    vertex(245, 295);
    vertex(220, 286);
    
    endShape();
}
