const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render() should return the correct SVG string with the given shape color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const expectedSVG = '<svg width="300" height="200">\n    <polygon points="150, 20 290, 200 10, 200" fill="blue" />\n    </svg>';
    expect(shape.render()).toEqual(expectedSVG);
  });
});

describe('Circle', () => {
  test('render() should return the correct SVG string with the given shape color', () => {
    const shape = new Circle();
    shape.setColor('red');
    const expectedSVG = '<svg width="300" height="200">\n      <circle cx="150" cy="100" r="100" fill="red" />\n    </svg>';
    expect(shape.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('render() should return the correct SVG string with the given shape color', () => {
    const shape = new Square();
    shape.setColor('green');
    const expectedSVG = '<svg width="300" height="200">\n      <rect x="75" y="75" width="300" height="200" fill="green" />\n    </svg>';
    expect(shape.render()).toEqual(expectedSVG);
  });
});
