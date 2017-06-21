var operator = process.argv[2];

var x = parseInt(process.argv[3]);
var y = parseInt(process.argv[4]);


if (operator === "add") {
	console.log(x+y);
}

else if (operator === "subtract") {
	console.log(x-y);
}

else if (operator === "multiply") {
	console.log(x*y);
}

else if (operator === "divide") {
	console.log(x/y);
}

else if (operator === "modulus") {
	console.log(x%y);
}

else if (operator === "exp") {
	console.log(Math.pow(x, y));
}




else {
	console.log("Please enter one of the following operators and two arguements:  add, subtract, multiply, divide, modulus");
}

