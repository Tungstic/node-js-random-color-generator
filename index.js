import chalk from 'chalk';
import toHex from 'colornames';
import randomColor from 'randomcolor';

// Get random hex code and its color
let hexCode = randomColor();
let color = chalk.hex(hexCode);

// Allow user request a color with a word
const userColor = process.argv[2];
//console.log(toHex(userColor));

if (userColor) {
  hexCode = toHex(userColor);
  color = chalk.hex(hexCode);
  drawRectangle();
} else {
  drawRectangle();
}

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

/*
Problem with this code is that userColor 'blue' as a string is not the exact match for hex code of randomColor({hue: 'blue'})

console.log(randomColor({ hue: userColor }))

So, user needs to put in a hex code to get a requested color
*/
