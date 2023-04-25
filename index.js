import chalk from 'chalk';
import toHex from 'colornames';
import randomColor from 'randomcolor';

// Get random hex code and its color
let hexCode = randomColor();
let color = chalk.hex(hexCode);

// Allow user request a color with a word
const userColor = process.argv[2];
const luminosity = process.argv[3];

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
if (userColor === 'red') {
  hexCode = '#b72d42';
  color = chalk.hex(hexCode);
  drawRectangle();
}
if (userColor && !luminosity) {
  const finalColor = userColor;
  hexCode = toHex(finalColor);
  color = chalk.hex(hexCode);
  drawRectangle();
} else if (userColor && luminosity) {
  const finalColor = luminosity + userColor;
  // console.log(finalColor);
  hexCode = toHex(finalColor);
  color = chalk.hex(hexCode);
  drawRectangle();
} else {
  drawRectangle();
}
