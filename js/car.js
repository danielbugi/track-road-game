const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.2;
const REVERSE_POWER = 0.15;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.15;

function carClass() {
  this.x = 75;
  this.y = 75;
  this.ang = 0;
  this.speed = 0;
  this.myCarPic; // which picture to use
  this.name = 'Untitled Car';

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;

  this.setUpInput = (upKey, rightKey, downKey, leftKey) => {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyKeyLeft = leftKey;
  };

  this.reset = (whichImage, carName) => {
    this.name = carName;
    this.myCarPic = whichImage;
    this.speed = 0;

    for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
      for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
        const arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (trackGrid[arrayIndex] == TRACK_PLAYER_START) {
          trackGrid[arrayIndex] = TRACK_ROAD;
          this.ang = -Math.PI / 2;
          this.x = eachCol * TRACK_W + TRACK_W / 2;
          this.y = eachRow * TRACK_H + TRACK_H / 2;
          return;
        } //end of player start if
      } // end of  col for
    } // end of row for
    console.log('NO PLAYER START FOUND');
  }; // end of car reset func

  this.move = () => {
    this.speed *= GROUNDSPEED_DECAY_MULT;

    if (this.keyHeld_Gas) {
      this.speed += DRIVE_POWER;
    }
    if (this.keyHeld_Reverse) {
      this.speed -= REVERSE_POWER;
    }

    if (Math.abs(this.speed).toFixed(2) > MIN_SPEED_TO_TURN) {
      if (this.keyHeld_TurnLeft) {
        //this.speed -= TURN_RATE;
        this.ang -= TURN_RATE;
      }
      if (this.keyHeld_TurnRight) {
        //this.speed += TURN_RATE;
        this.ang += TURN_RATE;
      }
      this.x += Math.cos(this.ang) * this.speed;
      this.y += Math.sin(this.ang) * this.speed;

      carTrackHandling(this);
    }
  };
  this.draw = () => {
    drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);
  };
}
