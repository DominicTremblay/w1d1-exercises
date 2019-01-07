// Add 2 numbers from the command line

// getting an array of arguments
var argsArr = process.argv.slice(2);

// adding the 2 arguments converted to a numeric value
var sum = Number(argsArr[0]) + Number(argsArr[1]);

console.log(sum);

