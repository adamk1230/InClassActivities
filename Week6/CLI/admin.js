var fs = require("fs");

var Admin = function(){
	this.print = function(){

		fs.readFile("log.txt", "utf8", function(error, data) {
			if (error) {
				return console.log(error);
			}
			console.log(data);
		});
	}
}

module.exports = Admin;


