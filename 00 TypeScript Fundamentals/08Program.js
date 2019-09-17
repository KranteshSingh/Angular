var Point = /** @class */ (function () {
    function Point() {
    }
    // we refer functions of a class as methods
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function () { };
    return Point;
}());
// myPoint is an object derived from class Point
var myPoint = new Point();
myPoint.draw();
