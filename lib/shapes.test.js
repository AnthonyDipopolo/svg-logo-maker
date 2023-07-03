const { expect } = require('chai');

describe('Triangle', () => {
  it('should render a triangle SVG element with the given shape color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).to.equal('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  it('should render a circle SVG element with the given shape color', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).to.equal('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});

describe('Square', () => {
  it('should render a square SVG element with the given shape color', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).to.equal('<rect x="75" y="75" width="150" height="150" fill="green" />');
  });
});