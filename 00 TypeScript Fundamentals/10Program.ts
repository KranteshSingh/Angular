class Point2 {
  private x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log('x: ' + this.x + ', Y: ' + this.y);
  }
}

let myPoint: Point2 = new Point2();

myPoint.draw();
