// function declaration in JavaScript
var log = function (message) {
    console.log(message);
};
// If your function has one parameter and you want to write it in curly braces
var doLog = function (message) {
    console.log(message);
};
// If you function has two parameters and multiple lines of code
var vlogging = function (location, message) {
    console.log(location);
    console.log(message);
};
// If your function has one line of code then you can omit curly braces
var doLogging = function (message) { return console.log(message); };
// if your function has no parameters
var blogging = function () { return console.log('I do Blogging'); };
