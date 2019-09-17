var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    return Point3;
}());
var myPoint1 = new Point3();
myPoint.draw();
