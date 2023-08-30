const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;

const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;
const KEY_A = 65;

let mouseX = 0;
let mouseY = 0;

const setupInput = () => {
  canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  blueCar.setUpInput(
    KEY_UP_ARROW,
    KEY_RIGHT_ARROW,
    KEY_DOWN_ARROW,
    KEY_LEFT_ARROW
  );
  greenCar.setUpInput(KEY_W, KEY_D, KEY_S, KEY_A);
};

const updateMousePos = (e) => {
  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;

  mouseX = e.clientX - rect.left - root.scrollLeft;
  mouseY = e.clientY - rect.top - root.scrollTop;

  // Hack to test car in any position
  // carX = mouseX;
  // carY = mouseY;
  // carSpeedX = 4;
  // carSpeedY = -4;
};

const keySet = (keyEvent, whichCar, setTo) => {
  if (keyEvent.keyCode == whichCar.controlKeyKeyLeft) {
    whichCar.keyHeld_TurnLeft = setTo;
    // carAng -= 0.5;
  }
  if (keyEvent.keyCode == whichCar.controlKeyRight) {
    whichCar.keyHeld_TurnRight = setTo;
    // carAng += 0.5;
  }
  if (keyEvent.keyCode == whichCar.controlKeyUp) {
    whichCar.keyHeld_Gas = setTo;
    this.speed += 0.5;
  }
  if (keyEvent.keyCode == whichCar.controlKeyDown) {
    whichCar.keyHeld_Reverse = setTo;
    this.speed -= 0.5;
  }
};

const keyPressed = (evt) => {
  console.log('key pressed:' + evt.keyCode);
  keySet(evt, greenCar, true);
  keySet(evt, blueCar, true);
  evt.preventDefault();
};

const keyReleased = (evt) => {
  // console.log('key released:' + e.keyCode);
  keySet(evt, greenCar, false);
  keySet(evt, blueCar, false);
  evt.preventDefault();
};
