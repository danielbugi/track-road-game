const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const blueCar = new carClass();
const greenCar = new carClass();

window.onload = () => {
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText('Loading...', canvas.width / 2, canvas.height / 2, 'white');

  loadImages();
};
const imageLoadingDoneSoStartGame = () => {
  const framesPerSecond = 100;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();

  loadLevel(levelOne);
};

const loadLevel = (whichLevel) => {
  trackGrid = whichLevel.slice();
  greenCar.reset(otherCarPic, 'Green Machine');
  blueCar.reset(carPic, 'Blue Storm');

  // levelOne[30] = 5;
};

const updateAll = () => {
  moveAll();
  drawAll();
};

const moveAll = () => {
  blueCar.move();
  greenCar.move();
};

const drawAll = () => {
  drawTracks();
  blueCar.draw();
  greenCar.draw();
};

// colorText(
//   'X: ' +
//     Math.floor(mouseX / TRACK_W) +
//     ',' +
//     'Y: ' +
//     Math.floor(mouseY / TRACK_H),
//   mouseX,
//   mouseY,
//   'yellow'
// );
