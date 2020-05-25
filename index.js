// Reverse an integer 
// take a number and return it in reverse.
// ex. reverseInt(521) === 125

/*
function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString);
}

const output = reverseInt(12345);

console.log(output);  */

// the parseInt() returns a string into an integer.

// You can also tweak it to accept negative values as well by adding the Math.sign(int). Now it will accept both positive and negative values. 


function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}

const output = reverseInt(-12345);

console.log(output);