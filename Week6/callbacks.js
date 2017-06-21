// Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.

// Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.

// Write a function that accepts a function (F) and a value (V), and returns a function that returns the result of running F on V. This sounds tricky, but it’s easier than it sounds—just take it step by step!

// Finally, write a short message to a file using fs.writeFile. Does this function use callbacks? If so, identify them.

// new messages

// function one(string, funct){
// 	console.log(string);
// 	funct;
// }

// function two(boolean, funct){
// 	if(boolean){
// 		funct;
// 	}
// }

function three(funct, value){
	funct(value);
}

three(pine, 7);

function pine(apple){
	console.log(apple);
}




// fs.appendFile("log.txt",
//   		"\n" +
//   		"-------------------------\n" +
//   		"Username: " + this.name + " Location: " + this.search + " Date: " + this.date,

//   		function(err) {
//   			if (err) {
//   				console.log(err);
//   			}
//   		});






