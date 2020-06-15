class Rectangle {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    isSquare() {
    if (this.a === this.b) {return true} else {return false}
    }
  
    getArea() {
    return this.a*this.b
    }
  
    getPerimeter() {
  return ((this.a+this.b)*2)
    }
  }
  
  module.exports = Rectangle;
  