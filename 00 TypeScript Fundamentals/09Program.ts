class Point {
  x: number;
  y: number;
  // constructor is a method inside class which is called when an object/instance is created
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('x: ' + this.x + ', Y: ' + this.y);
  }
}

let myPoint = new Point();
myPoint.draw();
