const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText('Loading...', canvas.width / 2, canvas.height / 2, 'white');

  loadImages();
};
const imageLoadingDoneSoStartGame = () => {
  const framesPerSecond = 100;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();
  carReset();
};

const updateAll = () => {
  moveAll();
  drawAll();
};

const moveAll = () => {
  carMove();
  carTrackHandling();
};

const drawAll = () => {
  drawTracks();
  carDraw();
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
