/*
Officer: 3523094
CaseNum: 601-3-56714103-3523094

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Magenta stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Teal fill ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 42 pixels of any of the crimes within no more than 3 days of their occurrence then the details
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
- triangle() NB. Draw each triangle with the point roughly at its center.

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var suspectData = [
  { Coord_X: 518, Coord_Y: 471, day: 12 },
  { Coord_X: 486, Coord_Y: 508, day: 12 },
  { Coord_X: 475, Coord_Y: 566, day: 13 },
  { Coord_X: 376, Coord_Y: 554, day: 13 },
  { Coord_X: 316, Coord_Y: 559, day: 13 },
  { Coord_X: 265, Coord_Y: 614, day: 14 },
  { Coord_X: 253, Coord_Y: 609, day: 14 },
  { Coord_X: 240, Coord_Y: 604, day: 14 },
  { Coord_X: 220, Coord_Y: 597, day: 15 },
  { Coord_X: 178, Coord_Y: 600, day: 15 },
  { Coord_X: 199, Coord_Y: 604, day: 17 },
  { Coord_X: 146, Coord_Y: 582, day: 18 },
  { Coord_X: 115, Coord_Y: 551, day: 20 },
  { Coord_X: 67, Coord_Y: 495, day: 21 },
  { Coord_X: 39, Coord_Y: 493, day: 22 },
  { Coord_X: 68, Coord_Y: 461, day: 24 }
];


//Recent crime records.

var crimeData_coordinate_x = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var crimeData_coordinate_y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var crimeData_recordedDay = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var crimeData_fatality_ = ['DRUSILLA WARMAN', 'HANG NIEMELA', 'MAJORIE JENI', 'PIERRE DORCEY', 'JESSIA PORTOS', 'GAYLA WILLMAR', 'JACQUELINE DURANTS', 'DEEDEE PHINNEY', 'JULIANA ADVERSANE', 'BRIDGET BROADVIEW', 'NELSON TINTLE', 'TU DAVISWOOD', 'BRAD SILVEIRA', 'TAMICA MAUBERT', 'KITTY THAXTER'];


function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  stroke(255, 0, 255);
  noFill();
  for (i = 0; i < suspectData.length; i++) {
    triangle(suspectData[i].Coord_X, suspectData[i].Coord_Y - 5, suspectData[i].Coord_X - 5, suspectData[i].Coord_Y + 5, suspectData[i].Coord_X + 5, suspectData[i].Coord_Y + 5);
  }

  noStroke();
  fill(0, 128, 128);
  for (i = 0; i < crimeData_coordinate_x.length; i++) {
    ellipse(crimeData_coordinate_x[i], crimeData_coordinate_y[i], 8, 8);
  }


  // for (i = 0; i < crimeData_coordinate_x; i++) {
  //   if (abs(dist(suspectData[i].Coord_X, suspectData[i].Coord_Y, crimeData_coordinate_x[i], crimeData_coordinate_y[i]) < 42) && (abs(suspectData[i].day - crimeData_recordedDay[i]) <= 3)) {
  //     possibleMatches.push(
  //       {
  //         crime: {
  //           x: crimeData_coordinate_x[i],
  //           y: crimeData_coordinate_y[i],
  //           victimName: crimeData_fatality_[i]
  //         },
  //         suspect: {
  //           x: suspectData[i].Coord_X,
  //           y: suspectData[i].Coord_Y
  //         }
  //       }
  //     )
  //   }
  //}

  for (i = 0; i < crimeData_coordinate_x.length; i++) {
    if (
      (abs(dist(suspectData[i].Coord_X, suspectData[i].Coord_Y, crimeData_coordinate_x[i], crimeData_coordinate_y[i])) < 42) &&
      (abs(suspectData[i].day - crimeData_recordedDay[i]) <= 3)
    ) {
      possibleMatches.push(
        {
          crime: {
            x: crimeData_coordinate_x[i],
            y: crimeData_coordinate_y[i],
            victimName: crimeData_fatality_[i]
          },
          suspect: {
            x: suspectData[i].Coord_X,
            y: suspectData[i].Coord_Y
          }
        })
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
