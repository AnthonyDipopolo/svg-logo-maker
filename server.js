const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
const { Triangle, Circle, Square } = require('./lib/shapes');
const path = require('path');

// Create an Express app
const app = express();

// Add the following middleware before serving static files
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Prompt the user for input using inquirer
inquirer.prompt([
  {
    name: 'text',
    message: "Enter your logo's three characters:",
    validate: (input) => {
      return input.length <= 3;
    },
  },
  {
    name: 'textColor',
    message: 'Enter logo text color:',
    default: 'red',
    validate: (input) => {
      // Check if the input is a valid color
      return /^#([0-9a-fA-F]{3}){1,2}$|^(red|green|blue|yellow)$/i.test(input);
    },
  },
  {
    name: 'shape',
    type: 'list',
    message: 'Choose a shape for your logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    name: 'shapeColor',
    message: 'Enter your shape color:',
    default: 'blue',
    validate: (input) => {
      // Check if the input is a valid color
      return /^#([0-9a-fA-F]{3}){1,2}$|^(red|green|blue|yellow)$/i.test(input);
    },
  },
])
.then((answers) => {
  // Extract the user's responses from the answers object
  const { text, textColor, shape, shapeColor } = answers;

  // Create shape objects
  const triangle = new Triangle();
  const circle = new Circle();
  const square = new Square();

  // Set colors based on user's input
  triangle.setColor(shape === 'triangle' ? shapeColor : '');
  circle.setColor(shape === 'circle' ? shapeColor : '');
  square.setColor(shape === 'square' ? shapeColor : '');

  // Generate SVG content
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <text x="10" y="50" fill="${textColor}">${text}</text>
    ${shape === 'triangle' ? triangle.render() : ''}
    ${shape === 'circle' ? circle.render() : ''}
    ${shape === 'square' ? square.render() : ''}
  </svg>`;

  // Write the SVG content to the logo.svg file in the public directory
  fs.writeFile('public/logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');

    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  });
});
