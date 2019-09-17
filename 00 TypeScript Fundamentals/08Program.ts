class Point {
  // we refer member of a class as fields
  x: number;
  y: number;
  // we refer functions of a class as methods
  draw() {
    console.log('x: ' + this.x + ', Y: ' + this.y);
  }

  getDistance() {}
}

// myPoint is an object derived from class Point
// an object is an instance of a class
let myPoint: Point = new Point();
myPoint.x = 45;
myPoint.y = 54;
myPoint.draw();
