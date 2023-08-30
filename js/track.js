const TRACK_W = 40;
const TRACK_H = 40; //temp
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
const TRACK_GAP = 2; //temp*
// prettier-ignore
const levelOne = [
  4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
	4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
	4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
	1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
	1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
	1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
	1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
	1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
	1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
	1, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
	1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
	0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
	0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4
];
let trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER_START = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

const returnTileTypeAtColRow = (col, row) => {
  if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
    const trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return trackGrid[trackIndexUnderCoord];
  } else {
    return TRACK_WALL;
  }
};

const carTrackHandling = (whichCar) => {
  const carTrackCol = Math.floor(whichCar.x / TRACK_W);
  const carTrackRow = Math.floor(whichCar.y / TRACK_H);
  // const trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);
  if (
    carTrackCol >= 0 &&
    carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 &&
    carTrackRow < TRACK_ROWS
  ) {
    const tileHere = returnTileTypeAtColRow(carTrackCol, carTrackRow);
    if (tileHere == TRACK_GOAL) {
      console.log(whichCar.name + ' WINS');
      loadLevel(levelOne);
    } else if (tileHere != TRACK_ROAD) {
      whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
      whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

      whichCar.speed *= -0.5;
    }
  }
};

const rowColToArrayIndex = (col, row) => {
  return col + TRACK_COLS * row;
};

const drawTracks = () => {
  let arrayIndex = 0;
  let drawTileX = 0;
  let drawTileY = 0;
  for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
    for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
      const tileKindHere = trackGrid[arrayIndex];
      let useImg = trackPics[tileKindHere];
      ctx.drawImage(useImg, drawTileX, drawTileY);

      drawTileX += TRACK_W;
      arrayIndex++;
    } // end of for each track
    drawTileY += TRACK_H;
    drawTileX = 0;
  }
}; //end of drawTracks
