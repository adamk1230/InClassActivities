function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.printStats = function() {
    console.log(this);
  };
  this.IsAlive = function () {
  	if (name.hitpoints > 0) {
			console.log("Your character is alive!");
		}
		else {
			console.log("Your character is dead!");
		}
  };
  this.Attack = function (opponent) {
  	
  }


}

var cloud = new Character("Cloud", "Soldier", "Male", 27, 500, 9000);
cloud.printStats();

var tifa = new Character("Tifa", "Rebel", "Female", 25, 750, 7500);
tifa.printStats();



IsAlive(cloud);

function Attack(name1, name2) {
	console.log(name2.hitpoints - name1.strength);
}

Attack(cloud, tifa);

function LevelUp(name) {
	name.age = name.age + 1;
	name.strength = name.strength + 5;
	name.hitpoints = name.hitpoints +25;
}

LevelUp(cloud);
cloud.printStats();





