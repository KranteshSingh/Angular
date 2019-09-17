var a = 'Krantesh';
var b = 23;
var c = true;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, e, 4, 5, 7, d];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
