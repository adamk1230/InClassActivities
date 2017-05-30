// 1) How do you create a variable called `name` and set it your name?
​var name = "Adam Kwan";

// 2) How do you create an array of your favorite movies?
var myFavoriteMovies = ["The Matrix", "Rounders", "LOTR", "Star Wars"];

// 3) How do you create an object called `me` that has the key/properties of: `name` and `numPets`? 
// Set the values of those keys to be your name, and the number of pets you have.
var me = {
	name: "Adam",
	numPets: 2
};

// 4) What are the data types of the following variables?
var fruit = "apple"; string
var luckyNumber = 7; number 
var booksToRead = ["Zen and the Art of Motorcyle Maintence", "The Handmaid's Tale", "The Color Purple"]; array
var isLearning = true; boolean
var trickyNumber = "101"; string
var sayHello = function() { alert('say hello') }; string
var pet = { name: "rex", type: "dog"}; object
​
// 5) How do you find the length of the array favoriteFoods?
var favoriteFoods = ["pizza", "thai curry", "indian curry", "sushi", "bagels"]
favoriteFoods.length
​
// 6) What index does the element of "pizza" have? How can you find out what index "bagels" have?
var favoriteFoods = ["pizza", "thai curry", "indian curry", "sushi", "bagels"]
0, favoriteFoods.indexOf("bagels") 
​
// 7) How do you loop through an array of `favoriteFoods` and print out a message of "I like [some-food-item]"?
var favoriteFoods = ["pizza", "thai curry", "indian curry", "sushi", "bagels"]
for (var i = 0; i <favoriteFoods.length. i++) {
	document.write("I like " + favoriteFoods[i]);
}
​
// 8) What will get printed in the console?
var codingRocks = true
var codingIsHard = true
if (codingRocks) {
 console.log('Coding rocks yoooo!')
} else if (codingIsHard) {
 console.log('Coding is hard, but I like the challenge')
}

"Coding rocks yoooo!"
​
// 9) What will get printed in the console?
var codingRocks = true
var codingIsHard = true
if (codingRocks) {
 console.log('Coding rocks yoooo!')
} 
if (codingIsHard) {
 console.log('Coding is hard, but I like the challenge')
} 

"Coding rocks yoooo!"
"Coding is hard, but I like the challenge"
​
// BONUS
// *) What will get printed out in the console?
var isTrue = true;
if (isTrue = true) {
 console.log('"isTrue = true" condition was met!')
}
if (isTrue == 'false') {
 console.log('"isTrue == true" condition was met!')
}
if (isTrue == 'true') {
 console.log('JavaScript is super simple & straight forward.')
}

"JavaScript is super simple & straight forward."