// 1) What is the key word that you use to declare a function?
function name(){}
// 2) Describe what a function is in your own words
//a function is like a block of instructions that you can call and execute 

// 3) Write a function called "sayHello" that takes a person's name
// as an argument and alerts a message of "hello" + [name-given]

function sayHello(){
	var nameGiven = prompt("What is your name?");
	alert("Hello " + nameGiven);
}

// 4) What is difference between console.log() inside a function & returning a value?
// ex.
function minusFive(x){
  console.log(x - 5);
  return x - 5;
}


// Bonus
// *) What is the difference between the following functions? (Besides their output)
function foo () {
  console.log('foo')
}
var bar = function() {
  console.log('bar')
}
foo()
bar()

// foo is a function that consol.log('foo')
// bar is a variable whos equal to a function that console.log('bar')
