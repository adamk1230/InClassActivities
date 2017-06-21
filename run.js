var bands = require("./bands.js");
console.log(bands);


for (var key in bands.genres){
	console.log(key + ": " + bands.genres[key]);
}