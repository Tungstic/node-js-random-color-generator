import chalk from 'chalk';
import randomColor from 'randomcolor';

// Get random hex code and its color
let hexCode = randomColor();
const color = chalk.hex(hexCode);

const userColor = process.argv[2];

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

/*
Problem with this code is that userColor 'blue' as a string is not the exact match for hex code of randomColor({hue: 'blue'})

console.log(randomColor({ hue: userColor }))

So, user needs to put in a hex code to get a requested color
*/
