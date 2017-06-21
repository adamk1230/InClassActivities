var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: isRainingDogs(),
	makeNoise2: function(){
		
	}
};

console.log(dogs.raining);
console.log(dogs.makeNoise);
console.log(dogs.makeNoise2())

// var isRainingDogs = function(){
// 	// if (dogs.raining) {
// 	// 	console.log(dogs.noise);
// 	// }
// 	console.log('dogs')
// }
function isRainingDogs(){
	console.log('hi')
	return 'yo you messed up'
}

function isRainingDogs2(){
	console.log('pooooooop')
}

// var cats = {
// 	raining: false,
// 	noise: "Meow!",
// 	makeNoise: isRainingCats()
// }

// function isRainingCats(){
// 	if (cats.raining) {
// 		console.log(cats.noise);
// 	}
// }

// isRainingDogs();

// cats.raining = true;

// isRainingCats();