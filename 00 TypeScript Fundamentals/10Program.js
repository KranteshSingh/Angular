var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    return Point2;
}());
var myPoint = new Point2();
myPoint.draw();
