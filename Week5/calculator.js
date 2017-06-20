var operator = process.argv[2];
var x = parseInt(process.argv[3]);
var y = parseInt(process.argv[4]);

if (operator === "add") {
	console.log(x+y);
}

if (operator === "subtract") {
	console.log(x-y);
}

if (operator === "multiply") {
	console.log(x*y);
}

if (operator === "divide") {
	console.log(x/y);
}

if (operator === "modulus"){
	console.log(x%y);
}

else {
	console.log("Please enter one of the following operators: add, subtract, multiply, divide, modulus.  Followed by two numbers.  opearator number1 number2")
}