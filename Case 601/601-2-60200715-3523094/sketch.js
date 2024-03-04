/*
Officer: 3523094
CaseNum: 601-2-60200715-3523094

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkOrange stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Yellow stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 77 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var suspect_data = [
  { Pt_X: 639, Pt_Y: 288 },
  { Pt_X: 681, Pt_Y: 286 },
  { Pt_X: 712, Pt_Y: 293 },
  { Pt_X: 756, Pt_Y: 310 },
  { Pt_X: 715, Pt_Y: 368 },
  { Pt_X: 701, Pt_Y: 425 },
  { Pt_X: 753, Pt_Y: 436 },
  { Pt_X: 815, Pt_Y: 468 },
  { Pt_X: 795, Pt_Y: 506 },
  { Pt_X: 788, Pt_Y: 497 },
  { Pt_X: 781, Pt_Y: 486 },
  { Pt_X: 768, Pt_Y: 489 },
  { Pt_X: 750, Pt_Y: 500 },
  { Pt_X: 732, Pt_Y: 506 },
  { Pt_X: 714, Pt_Y: 514 },
  { Pt_X: 695, Pt_Y: 531 },
  { Pt_X: 693, Pt_Y: 552 },
  { Pt_X: 654, Pt_Y: 523 },
  { Pt_X: 624, Pt_Y: 500 },
  { Pt_X: 594, Pt_Y: 484 },
  { Pt_X: 555, Pt_Y: 474 }
];


//Recent crime records.

var attack_data_Loc_X = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var attack_data_Loc_Y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var attack_data_Killed_Details = ['JAUNITA JOYER', 'LESLEY MONKSFORD', 'LOUISE ZETLAND', 'JESUS FORSLIN', 'TAMICA MAUBERT', 'NICOLE ASHELY', 'SUMMER CASIMERE', 'DARBY MYRLE', 'HANG NIEMELA', 'ERMELINDA OORIN', 'BRIDGET BROADVIEW', 'LINETTE MOHWAWK', 'JULIANA ADVERSANE', 'JENIFFER DEAUVILLE'];


function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  stroke(255, 140, 0); // Dark Orange
  noFill();
  beginShape();
  for (i = 0; i < suspect_data.length; i++) {

    vertex(suspect_data[i].Pt_X, suspect_data[i].Pt_Y);

  }
  endShape();

  stroke(255, 255, 0);
  noFill();
  for (i = 0; i < attack_data_Loc_X.length; i++) {
    ellipse(attack_data_Loc_X[i], attack_data_Loc_Y[i], 8, 8);
  }


  for (i = 0; i < attack_data_Loc_X.length; i++) {
    if (dist(suspect_data[i].Pt_X, suspect_data[i].Pt_Y, attack_data_Loc_X[i], attack_data_Loc_Y[i]) < 77) {// { crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }
      possibleMatches.push(
        {
          crime: {
            x: attack_data_Loc_X[i],
            y: attack_data_Loc_Y[i],
            victimName: attack_data_Killed_Details[i]
          },
          suspect: {
            x: suspect_data[i].Pt_X,
            y: suspect_data[i].Pt_Y
          }
        }


      );

    }
  }

  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

    noStroke();
    fill(127);
    text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
  }
}

//We are not using the draw function this time
