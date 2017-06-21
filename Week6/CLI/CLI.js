var inquirer = require('inquirer');
var Weather = require("./user.js");
var Admin = require("./admin.js");

// var command = process.argv[2];
// var userName = process.argv[3];
// var nodeArgs = process.argv;


// for(var i = 3; i < nodeArgs.length; i++);

// if (command === "user"){
// 	// newUserSearch function
// 	//Add userSearch to text file
// }
// if (command === "admin"){
// 	Weather();
// }

inquirer.prompt([
{
	name: "command",
	type: "list",
	message: "Select user or admin",
	choices: ["User", "Admin"]
},
{
	type: "input",
	message: "Enter username",
	name: "username"
},
{
	type: "input",
	message: "Enter address",
	name: "address"
}
]).then(function(answers) {

	if(answers.command == "User"){
		var newSearch = new Weather(answers.address, answers.username);

		newSearch.print();
	}
	if(answers.command == "Admin"){
		var newAdmin = new Admin();
		newAdmin.print();
	}
	

});
//-----------------------

		// var WeatherAdmin = require("./WeatherAdmin");

		// var command = process.argv[2];

		// var userName = process.argv[3];

		// var userLocation = process.argv[4];

		// var MyAdmin = new WeatherAdmin();

		// if (command === "user"){
		// 	MyAdmin.getData();
		// }

		// else {
		// 	MyAdmin.newUserSearch(userName, userLocation);
		// }

