// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var nodeArgs = process.argv;

var points = [];

for (i=2; i<nodeArgs.length; i++) {
	if(parseInt(nodeArgs[i])){
	points.push(nodeArgs[i]);
	}
}

nodeArgs.push("batman");
console.log(points.sort(function(a, b){return a-b}));
console.log(nodeArgs);




