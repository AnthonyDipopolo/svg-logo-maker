// Shape classes
class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }
}

// Triangle class
class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
    <polygon points="150, 20 290, 200 10, 200" fill="${this.color}" />
    </svg>`;
  }
}

// Circle class
class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
      <circle cx="150" cy="100" r="100" fill="${this.color}" />
    </svg>`;
  }
}

// Square class
class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
      <rect x="75" y="75" width="300" height="200" fill="${this.color}" />
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
