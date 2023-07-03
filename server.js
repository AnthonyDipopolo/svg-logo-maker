const inquirer = require('inquirer');
const fs = require('fs');

// Prompt the user for input using inquirer
inquirer
  .prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        return input.length <= 3;
      }
    },
    {
      name: 'textColor',
      message: 'Enter text color:'
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color:'
    }
  ])
  .then((answers) => {
    // Extract the user's responses from the answers object
    const { text, textColor, shape, shapeColor } = answers;

    // Generate the SVG content using the user's inputs
    const svgContent = `<svg width="300" height="200">
      <text x="10" y="50" fill="${textColor}">${text}</text>
      <${shape} fill="${shapeColor}" cx="150" cy="100" r="50"/>
    </svg>`;

    // Write the SVG content to the logo.svg file
    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
