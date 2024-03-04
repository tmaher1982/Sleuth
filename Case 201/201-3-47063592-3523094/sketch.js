/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3523094
CaseNum: 201-3-47063592-3523094

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
    // 1 Tip of dress
    vertex(592, 179 );
    vertex(612,189);
    vertex(656,143);
    vertex(692,145);
    vertex(645,201);
    vertex(652, 210);
    vertex(687, 170);
    vertex(742,180);
    vertex(740, 200);
    vertex(689, 209);
    vertex(681, 218);
    vertex(728, 225);
    vertex(614, 352);
    vertex(542, 419);
    vertex(655, 514);
    vertex(652,545);
    vertex(633,546);
    vertex(622,510);
    vertex(502, 445);
    vertex(483,460);
    vertex(446, 442);
    vertex(438, 330);
    vertex(430, 320);
    vertex(400,327);
    vertex(395, 340);
    vertex(368,337);
    vertex(372, 319)
    vertex(436, 286);
    vertex(470,331);
    vertex(510, 296);
    vertex(549, 240);
    vertex(592, 179 );
    
    endShape();
    
    
}
