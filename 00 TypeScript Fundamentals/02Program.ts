function doSomething() {
  for (var i = 0; i <= 5; i++) {
    console.log(i);
  }

  console.log('Value' + i); // returns 6 - Problem with using var keyword for defining variables
}
// using var means the variable is scoped to the nearest function
// using let keyword means the variable is scoped to the nearest block
doSomething();

function looping() {
  for (let j = 1; j <= 10; j++) {
    console.log(j);
  }

  console.log('value of j' + j); // this will give an error
}

looping();
