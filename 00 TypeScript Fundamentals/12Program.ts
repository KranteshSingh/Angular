class Point4 {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }

  // GETTER
  get x() {
    return this._x;
  }
  // SETTER
  set x(value) {
    if (value < 0) throw new Error('Invalid Input');

    this._x = value;
  }
}

let myPoint4 = new Point4();

let x = myPoint4.x; // using getter
myPoint4.x = 45; // using setter

myPoint4.draw();
