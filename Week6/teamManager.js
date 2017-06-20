var inquirer = require("inquirer");

var coinFlip =0;
function flip(){
	coinFlip = Math.floor(Math.random() * 2);
	console.log(coinFlip);
}

var number = 0;
var randomNumber = function(){
	number = Math.floor(Math.random() * (50 - 1)) + 1;
	console.log("in: " + number);
}

var teamScore = 0;

function Player (name, position, offense, defense){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
}

Player.prototype.goodGame = function(){
	flip();
	if(coinFlip === 1){
		offense++;
	}
	else{
		defense++;
	}
}

Player.prototype.badGame = function(){
	flip();
	if(coinFlip === 1){
		offense--;
	}
	else{
		defense--;
	}
}

Player.prototype.printStats = function(){
	console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);

};

var starters = [];
var subs = [];

var count = 0;

var askQuestion = function(){
	if (count < 2){
		console.log("Please enter a starting player:");
		inquirer.prompt([
		{
			name: "name",
			message: "Player name:"
		}, {
			name: "position",
			message: "Player position:"
		}, {
			name: "offense",
			message: "On a scale of 1-10, player's offenisve skill:"
		}, {
			name: "defense",
			message: "On a scale of 1-10, player's deffensive skill:"
		}
	]).then(function(answers){
		var newPlayer = new Player(
			answers.name,
			answers.position,
			answers.offense,
			answers.defense,
			starter = true);

		starters.push(newPlayer);

		count++;

		askQuestion();
	});
	}
	else if (count >= 2 && count < 3){
		console.log("Please enter a substitue player:");
		inquirer.prompt([
		{
			name: "name",
			message: "Player name:"
		}, {
			name: "position",
			message: "Player position:"
		}, {
			name: "offense",
			message: "On a scale of 1-10, player's offenisve skill:"
		}, {
			name: "defense",
			message: "On a scale of 1-10, player's deffensive skill:"
		}
	]).then(function(answers){
		var newPlayer = new Player(
			answers.name,
			answers.position,
			answers.offense,
			answers.defense,
			starter = false);

		subs.push(newPlayer);

		count++;

		askQuestion();
	});
	}
	else {

		
		console.log(starters);
		console.log(subs);

		offenseTotal();
		console.log("ototal: " + offenseTotal);
		randomNumber();
		console.log("random: " + number);
		if (number < offenseTotal){
			teamScore++;
		}


		
		defenseTotal();
		console.log("dtotaol: " + defenseTotal);
		randomNumber();
		console.log("random: " + number);
		if (number > defenseTotal){
			teamScore--;
		}

		// for (var x = 0; x < starters.length; x++){
		// 	starters[x].printStats();
		// }
	}
};

var offenseTotal = 0;

var offenseTotal = function(){
	offenseTotal = 0;
	for (var i =0; i < starters.length; i++){
		offenseTotal += parseInt(starters[i].offense);
	}
	
}

var defenseTotal = 0;

var defenseTotal = function(){
	defenseTotal = 0;
	for (var i=0; i< starters.length; i++){
		defenseTotal += parseInt(starters[i].defense);
	}
	
}

askQuestion();


// var askQuestionSubs = function(){
// 	count = 0;
// 	if (count < 3){
// 		console.log("Please enter a substitue player:")
// 		inquirer.prompt([
// 		{
// 			name: "name",
// 			message: "Player name:"
// 		}, {
// 			name: "position",
// 			message: "Player position:"
// 		}, {
// 			name: "offense",
// 			message: "On a scale of 1-10, player's offenisve skill:"
// 		}, {
// 			name: "defense",
// 			message: "On a scale of 1-10, player's deffensive skill:"
// 		}
// 	]).then(function(answers){
// 		var newPlayer = new Player(
// 			answers.name,
// 			answers.position,
// 			answers.offense,
// 			answers.defense,
// 			newPlayer.starter = false);

// 		starters.push(newPlayer);

// 		count++;

// 		askQuestionSubs();
// 	});
// 	}
// 	else {
// 		console.log(subs);
// 		// for (var x = 0; x < subs.length; x++){
// 		// 	subs[x].printStats();
// 		// }
// 	}
// };








// var playGame = function(){
// 	for(var i = 0; i < 10; i++){
// 		randomNumber();
// 		if(number <)
// 	}


// }