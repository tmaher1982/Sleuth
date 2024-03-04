/*
Officer: 3523094
CaseNum: 601-3-14545168-3523094

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Chartreuse stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MediumOrchid stroke triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 81 pixels of any of the crimes within no more than 0 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke
- ellipse()

- stroke
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Suspect_Data = [
  { point_x: 518, point_y: 471, date: 12 },
  { point_x: 486, point_y: 508, date: 12 },
  { point_x: 475, point_y: 566, date: 13 },
  { point_x: 376, point_y: 554, date: 13 },
  { point_x: 316, point_y: 559, date: 13 },
  { point_x: 265, point_y: 614, date: 14 },
  { point_x: 253, point_y: 609, date: 14 },
  { point_x: 240, point_y: 604, date: 14 },
  { point_x: 220, point_y: 597, date: 15 },
  { point_x: 178, point_y: 600, date: 15 },
  { point_x: 199, point_y: 604, date: 17 },
  { point_x: 146, point_y: 582, date: 18 },
  { point_x: 115, point_y: 551, date: 20 },
  { point_x: 67, point_y: 495, date: 21 },
  { point_x: 39, point_y: 493, date: 22 },
  { point_x: 68, point_y: 461, date: 24 }
];


//Recent crime records.

var Attack_Logbook = {
  coordX: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
  coordY: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
  day: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
  murderedDetails: ['DARBY MYRLE', 'JENIFFER DEAUVILLE', 'LESLEY MONKSFORD', 'MAJORIE JENI', 'NICOLE ASHELY', 'GAYLA WILLMAR', 'JAUNITA JOYER', 'LIANNE COURTWOOD', 'NELSON TINTLE', 'LOUISE ZETLAND', 'BRIDGET BROADVIEW', 'TU DAVISWOOD', 'BRAD SILVEIRA', 'RANDEE CROME', 'DRUSILLA WARMAN'],
};

function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  //stroke(127, 255, 0);
  fill(127, 255, 0);
  noStroke();
  for (i = 0; i < Suspect_Data.length; i++) {
    ellipse(Suspect_Data[i].point_x, Suspect_Data[i].point_y, 8, 8);
  }


  noFill();
  stroke(186, 85, 211);

  for (i = 0; i < Suspect_Data.length; i++) {
    triangle(Attack_Logbook.coordX[i], Attack_Logbook.coordY[i] - 5, Attack_Logbook.coordX[i] - 5, Attack_Logbook.coordY[i] + 5, Attack_Logbook.coordX[i] + 5, Attack_Logbook.coordY[i] + 5);
  }

  for (i = 0; i < Suspect_Data.length; i++) {
    if ((dist(Suspect_Data[i].point_x, Suspect_Data[i].point_y, Attack_Logbook.coordX[i], Attack_Logbook.coordY[i]) < 81) && (abs(Suspect_Data[i].date - Attack_Logbook.day[i]) == 0)) {
      possibleMatches.push(
        {
          crime: {
            x: Attack_Logbook.coordX[i],
            y: Attack_Logbook.coordY[i],
            victimName: Attack_Logbook.murderedDetails[i]
          },
          suspect: {
            x: Suspect_Data[i].point_x,
            y: Suspect_Data[i].point_y
          }
        }
      )
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
