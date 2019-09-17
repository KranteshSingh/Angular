// function declaration in JavaScript
let log = function(message) {
  console.log(message);
};
// If your function has one parameter and you want to write it in curly braces
let doLog = message => {
  console.log(message);
};

// If you function has two parameters and multiple lines of code
let vlogging = (location, message) => {
  console.log(location);
  console.log(message);
};

// If your function has one line of code then you can omit curly braces
let doLogging = message => console.log(message);

// if your function has no parameters
let blogging = () => console.log('I do Blogging');
