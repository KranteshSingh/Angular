var Point4 = /** @class */ (function () {
    function Point4(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point4.prototype.draw = function () {
        console.log('x: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point4.prototype, "x", {
        // GETTER
        get: function () {
            return this._x;
        },
        // SETTER
        set: function (value) {
            if (value < 0)
                throw new Error('Invalid Input');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point4;
}());
var myPoint4 = new Point4();
var x = myPoint4.x; // using getter
myPoint4.x = 45; // using setter
myPoint4.draw();
