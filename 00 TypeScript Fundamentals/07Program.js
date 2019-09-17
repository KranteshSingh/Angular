// Cohesion : things that are related should be part of one unit
// Class: Groups variable (properties) and functions (methods) that are highly related
var Point = /** @class */ (function () {
    function Point() {
    }
    // we refer functions of a class as methods
    Point.prototype.draw = function (another) { };
    Point.prototype.getDistance = function (Point) { };
    return Point;
}());
