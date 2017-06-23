var inquirer = require("inquirer");

inquirer.prompt([
		{
			type: "list",
			message: "What do you want to do?",
			choices: ["POST AN ITEM","BID ON AN ITEM"]
			name: "command"

		}
		]).then(function(answers) {
			if(answers.command == "POST AN ITEM"){
				inquirer.prompt([
					{
						type: "input",
						message: "What do you want to post?",
						name: "post"
					},
					{
						type: "input",
						message: "What is the starting bid?",
						name: "bid"
					}

				]).then(function(answers) {

			
		}
			else{
				
			}