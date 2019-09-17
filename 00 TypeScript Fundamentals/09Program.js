var Point = /** @class */ (function () {
    // constructor is a method inside class which is called when an object/instance is created
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var myPoint = new Point();
myPoint.draw();
