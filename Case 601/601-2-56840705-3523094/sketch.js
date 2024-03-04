/*
Officer: 3523094
CaseNum: 601-2-56840705-3523094

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkGoldenrod stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MediumTurquoise fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 91 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke
- rect() NB. Draw each rectangle with the point at its center.

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

// possibleMatches[0] = {
//   suspct_x: 0, suspect_y: 0, crime_x: 0, crime_y: 0, victimName: ""
// };
//Sightings of Casey Fry.

var KillerData = {
  posX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
  posY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var MurderRecorded = [
  { positionX: 409, positionY: 446, victimName: 'KITTY THAXTER' },
  { positionX: 443, positionY: 419, victimName: 'PIERRE DORCEY' },
  { positionX: 465, positionY: 548, victimName: 'NICOLE ASHELY' },
  { positionX: 709, positionY: 552, victimName: 'JESSIA PORTOS' },
  { positionX: 695, positionY: 421, victimName: 'DRUSILLA WARMAN' },
  { positionX: 652, positionY: 268, victimName: 'LARRAINE PEGORD' },
  { positionX: 641, positionY: 306, victimName: 'JACQUELINE DURANTS' },
  { positionX: 119, positionY: 344, victimName: 'JESUS FORSLIN' },
  { positionX: 114, positionY: 359, victimName: 'DARBY MYRLE' },
  { positionX: 90, positionY: 490, victimName: 'MALINDA GOODBURY' },
  { positionX: 76, positionY: 516, victimName: 'LAVERNE JACQUELIN' },
  { positionX: 615, positionY: 741, victimName: 'TU DAVISWOOD' },
  { positionX: 349, positionY: 796, victimName: 'GAYLA WILLMAR' },
  { positionX: 456, positionY: 770, victimName: 'JULIANA ADVERSANE' }
];


function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  // DarkGolden Rod colour is (184, 134, 11)
  stroke(184, 134, 11);
  noFill();
  for (i = 0; i < KillerData.posX.length; i++) {
    rect(KillerData.posX[i] - 5, KillerData.posY[i] - 5, 10, 10);
  }

  //MediumTurquoise fill triangles centered over each location.
  noStroke();
  fill(72, 209, 204);
  for (i = 0; i < MurderRecorded.length; i++) {
    triangle(MurderRecorded[i].positionX, MurderRecorded[i].positionY - 5,
      MurderRecorded[i].positionX - 5, MurderRecorded[i].positionY + 5,
      MurderRecorded[i].positionX + 5, MurderRecorded[i].positionY + 5);

    if (dist(KillerData.posX[i], MurderRecorded[i].positionX) < 91 || (KillerData.posY[i], MurderRecorded[i].positionY) < 91) {
      possibleMatches.push(suspect_x = KillerData.posX[i], suspect_y = KillerData.posY[i], crime_x = MurderRecorded[i].positionX, crime_y = MurderRecorded[i].positionY, victimName = MurderRecorded[i].victimName);
    }
  }


  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

    // if (dist(KillerData.posX[i], MurderRecorded[i].positionX) < 91 || (KillerData.posY[i], MurderRecorded[i].positionY) < 91) {
    //   possibleMatches.push(suspect_x = KillerData.posX[i], suspect_y = KillerData.posY[i], crime_x = MurderRecorded[i].positionX, crime_y = MurderRecorded[i].positionY, victimName = MurderRecorded[i].victimName);
    // }

    noStroke();
    fill(127);
    text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
  }
}

//We are not using the draw function this time

// Achievements:
// You correctly used a for loop.
// You have correctly drawn the points for Casey Fry's trail.
// You have correctly drawn the points for the crime scenes.

// Improvements:
// The possibleMatches data structure has not been populated correctly