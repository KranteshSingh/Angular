class Point3 {
  constructor(private x?: number, private y?: number) {}
  draw() {
    console.log('x: ' + this.x + ', Y: ' + this.y);
  }
}

let myPoint1 = new Point3();

myPoint1.draw();
