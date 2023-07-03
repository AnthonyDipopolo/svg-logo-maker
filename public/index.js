const open = require('open');

// Specify the path to the SVG file
const svgFilePath = __dirname + '/logo.svg';

// Open the SVG file in the default web browser
open(svgFilePath)
  .then(() => {
    console.log('SVG file opened successfully');
  })
  .catch((err) => {
    console.error('Error opening SVG file:', err);
  });
