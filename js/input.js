const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

let keyHeld_Gas = false;
let keyHeld_Reverse = false;
let keyHeld_TurnLeft = false;
let keyHeld_TurnRight = false;

let mouseX = 0;
let mouseY = 0;

const setupInput = () => {
  canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);
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

const keyPressed = (e) => {
  console.log('key pressed:' + e.keyCode);
  if (e.keyCode == KEY_LEFT_ARROW) {
    keyHeld_TurnLeft = true;
    // carAng -= 0.5;
  }
  if (e.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_TurnRight = true;
    // carAng += 0.5;
  }
  if (e.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = true;
    carSpeed += 0.5;
  }
  if (e.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = true;
    carSpeed -= 0.5;
  }

  e.preventDefault();
};

const keyReleased = (e) => {
  // console.log('key released:' + e.keyCode);
  if (e.keyCode == KEY_LEFT_ARROW) {
    keyHeld_TurnLeft = false;
  }
  if (e.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_TurnRight = false;
  }
  if (e.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = false;
  }
  if (e.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = false;
  }
};
