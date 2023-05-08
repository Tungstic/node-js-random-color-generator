import chalk from 'chalk';
import randomColor from 'randomcolor';

// Allow user to request hue and luminosity with words
const userColor = process.argv[2];
const luminosity = process.argv[3];

// Set up hexCode variable - will be randomized or changed by the user
let hexCode;

// Adjust hexCode depending on hue/luminosity set by user - if available

if (userColor && luminosity) {
  hexCode = randomColor({
    luminosity: luminosity,
    hue: userColor,
  });
} else if (userColor && !luminosity) {
  hexCode = randomColor({
    luminosity: 'random',
    hue: userColor,
  });
} else {
  hexCode = randomColor({
    luminosity: 'random',
    hue: 'random',
  });
}

// Give the chosen hexCode its respective color
const color = chalk.hex(hexCode);

// Print a rectangle of hashes with a corresponding hex code inside

console.log(color('###############################'));
console.log(color('###############################'));
console.log(color('###############################'));
console.log(color('#####                     #####'));
console.log(color(`#####       ${color(hexCode)}       #####`));
console.log(color('#####                     #####'));
console.log(color('###############################'));
console.log(color('###############################'));
console.log(color('###############################'));
