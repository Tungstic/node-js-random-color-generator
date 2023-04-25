import chalk from 'chalk';
import randomColor from 'randomcolor';

// Get random hex code and its color
const hexCode = randomColor();
const color = chalk.hex(hexCode);

// Hardcode rectangle because neither canvas nor gm library helped me draw it
function topAndBottom() {
  const times = 3;
  for (let i = 0; i < times; i++) {
    console.log(color('###############################'));
  }
}

function middle() {
  console.log(color('#####                     #####'));
  console.log(color('#####       ' + color(hexCode) + '       #####'));
  console.log(color('#####                     #####'));
}

function drawRectangle() {
  topAndBottom();
  middle();
  topAndBottom();
}

drawRectangle();
